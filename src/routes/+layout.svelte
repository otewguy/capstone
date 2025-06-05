<script>
    import {goto, invalidate} from '$app/navigation';
    import {onMount, setContext} from 'svelte';
    import { redirect } from '@sveltejs/kit';
    import Modal from '$lib/components/Modal.svelte';
    import Banner from '$lib/components/Banner.svelte';

    let {data, children} = $props();
    let {session, user, supabase} = $derived(data);
    let isLoggedIn = $state(true);
    let role = $state(null);

    role = data.role ?? null;
    isLoggedIn = data.role != null;

    setContext('login',{
        get isLoggedIn() {return isLoggedIn;},
        set isLoggedIn(value) {isLoggedIn = value;},
        get role() {return role;},
        set role(value) {role = value;}
    });
    
    let showModal = $state(false);
    let component = $state(null);
    let properties = $state({});
    let result = $state();
    setContext('modal', {
        get showModal() { return showModal; },
        set showModal(value) { showModal = value; },
        get result() {return result;},
        set result (value) { result = value; },
        notify(title, content) {
            this.open('notify', {title, content});
        },
        open(cp, pr) {
            component = cp,
            properties = pr,
            showModal=true;
        },
        close() {showModal = false;}
    });

    onMount(()=> {
        const {data} = supabase.auth.onAuthStateChange((event, newSession) => {
            if (newSession?.expires_at !== session?.expires_at) {
                invalidate('supabase:auth');
            }
        });
        return () => data.subscription.unsubscribe();
    })

    async function signOut() {
        const {error} = await supabase.auth.signOut();
        if (error) fail(400, {error: error.message});
        isLoggedIn = false;
        role = null;
        goto('/auth/login');
    }
</script>

<Banner>
    {#snippet navigation()}
        <nav class="banner-nav">
            <div>
                {#if isLoggedIn && role === 'ADMIN'}
                <a href="/private/users">Users</a>
                <a href="/private/profiles">Profiles</a>
                <a href="/private/officers">Officers</a>
                <a href="/private/sites">Sites</a>
                <a href="/private/items">Items</a>
                <a href="/private/customers">Customers</a>
                <a href="/private/dos">DOs</a>
                {/if}
                {#if isLoggedIn && (role === 'ADMIN' || role === 'OFFICER')}
                <a href='/private/dolines'>DOLines</a>
                {/if}
            </div>
            <div>
                {#if (isLoggedIn)}
                    <button onclick="{signOut}">Sign Out</button>
                {/if}
            </div>
        </nav>
        <style>
            .banner-nav {
                display: flex;
                gap: 20px;
            }

            .banner-nav a {
                color: white;
                text-decoration: none;
                font-size: 16px;
                transition: color 0.3s;
                margin-right: 10px;
            }

            .banner-nav a:hover {
                color: #ffcc00;
            }
        </style>
    {/snippet}
</Banner>

{@render children()}

<Modal bind:showModal {component} {properties} bind:result/>


