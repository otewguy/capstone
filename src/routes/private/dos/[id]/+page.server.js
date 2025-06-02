import prisma from '$lib/prisma.server.js';
import { fail } from '@sveltejs/kit';

function convertFormDataToObject(data) {
    const obj = {};
    for (const [key, value] of data) {
        const matches = key.match(/\[(.*?)\]/g);
        if (matches[1]) {
            console.log(matches[0]);
            console.log(matches[1]);
            obj[key] = value;
        } else {
            obj[key] = value;
        }
    }
    return obj;
}

function formBody(body) {
  return [...body.entries()].reduce((data, [k, v]) => {
    let value = v;
    if (v === "true") value = true;
    if (v === "false") value = false;
    if (!isNaN(Number(v))) value = Number(v);

    // For grouped fields like multi-selects and checkboxes, we need to
    // store the values in an array.
    if (k in data) {
      const val = data[k];
      value = Array.isArray(val) ? [...val, value] : [val, value];
    }

    data[k] = value;

    return data;
  }, {});
}

async function formDataToObject(formData) {
  const obj = {};
  for (const [key, value] of formData.entries()) {
    obj[key] = value;
  }
  return obj;
}

export async function load({params}) {
    const sites = await prisma.site.findMany();
    const items = await prisma.item.findMany();
    const customers = await prisma.customer.findMany();
    if (params.id === 'new') return {
        _do: {id: null, number: '', customer: '', date: new Date(), dolines: [
            {do: '', site: '', item: '', qty: '', startDate: new Date(), endDate: new Date()}
        ]},
        sites, items, customers
    };
    const _do = await prisma.do.findUnique({
        where: {id: params.id,},
        include: {
            customer: true,
            dolines: {include: {do: true, site: true, item: true}}
        }
    });
    return {_do, sites, items, customers};
}

export const actions = {
    default: async({request}) =>  {
        try {
            const data = await request.formData();
            let obj = {};
            for (const [key, value] of data) {
                if (key.includes('.')) {
                    const ks = key.split('.');
                    const index = ks[0].match(/\[(.*?)\]/g).map(match => match.slice(1, -1))[0];
                    const k = ks[0].split('[')[0];
                    if (!obj[k]) obj[k] = [];
                    if (!obj[k][index]) obj[k][index]={};
                    obj[k][index][ks[1]] = value;
                } else {
                    obj[key] = value;
                }
            }
            const result = await prisma.$transaction(async(prisma)=>{
                await prisma.doline.deleteMany({
                    where: {doId: obj.id},
                });
                const _do = await prisma.do.upsert({
                    where: {id: obj.id},
                    update: {
                        number: obj.number,
                        project: obj.project,
                        date: new Date(obj.date),
                        customer: {connect: {id: obj.customer}},                       
                    },
                    create: {
                        number: obj.number,
                        project: obj.project,
                        date: new Date(obj.date),
                        customer: {connect: {id: obj.customer}},                           
                    }
                });
                obj.dolines.map(doline => {
                    doline.doId = _do.id;
                    doline.startDate = new Date(doline.startDate);
                    doline.endDate = new Date(doline.endDate);
                    doline.qty = parseInt(doline.qty);
                });
                for (const doline of obj.dolines) {
                    await prisma.doline.create({
                        data: {
                            do: {connect: {id: doline.doId}},
                            site: {connect: {id: doline.site}},
                            item: {connect: {id: doline.item}},
                            qty: doline.qty,
                            startDate: doline.startDate,
                            endDate: doline.endDate
                        }
                    });
                }
            }, {
                timeout: 20000
            });
        } catch(error){
            console.log(error);
            return fail(300, {error: error.message});
        }
    }
}