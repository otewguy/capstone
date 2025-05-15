
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Item
 * 
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>
/**
 * Model Officer
 * 
 */
export type Officer = $Result.DefaultSelection<Prisma.$OfficerPayload>
/**
 * Model Site
 * 
 */
export type Site = $Result.DefaultSelection<Prisma.$SitePayload>
/**
 * Model Do
 * 
 */
export type Do = $Result.DefaultSelection<Prisma.$DoPayload>
/**
 * Model Doline
 * 
 */
export type Doline = $Result.DefaultSelection<Prisma.$DolinePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.officer`: Exposes CRUD operations for the **Officer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Officers
    * const officers = await prisma.officer.findMany()
    * ```
    */
  get officer(): Prisma.OfficerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.site`: Exposes CRUD operations for the **Site** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sites
    * const sites = await prisma.site.findMany()
    * ```
    */
  get site(): Prisma.SiteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.do`: Exposes CRUD operations for the **Do** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dos
    * const dos = await prisma.do.findMany()
    * ```
    */
  get do(): Prisma.DoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doline`: Exposes CRUD operations for the **Doline** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dolines
    * const dolines = await prisma.doline.findMany()
    * ```
    */
  get doline(): Prisma.DolineDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Customer: 'Customer',
    Item: 'Item',
    Officer: 'Officer',
    Site: 'Site',
    Do: 'Do',
    Doline: 'Doline'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "customer" | "item" | "officer" | "site" | "do" | "doline"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Item: {
        payload: Prisma.$ItemPayload<ExtArgs>
        fields: Prisma.ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findFirst: {
            args: Prisma.ItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findMany: {
            args: Prisma.ItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          create: {
            args: Prisma.ItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          createMany: {
            args: Prisma.ItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          delete: {
            args: Prisma.ItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          update: {
            args: Prisma.ItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          deleteMany: {
            args: Prisma.ItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          upsert: {
            args: Prisma.ItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.ItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
      Officer: {
        payload: Prisma.$OfficerPayload<ExtArgs>
        fields: Prisma.OfficerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OfficerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OfficerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerPayload>
          }
          findFirst: {
            args: Prisma.OfficerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OfficerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerPayload>
          }
          findMany: {
            args: Prisma.OfficerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerPayload>[]
          }
          create: {
            args: Prisma.OfficerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerPayload>
          }
          createMany: {
            args: Prisma.OfficerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OfficerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerPayload>[]
          }
          delete: {
            args: Prisma.OfficerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerPayload>
          }
          update: {
            args: Prisma.OfficerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerPayload>
          }
          deleteMany: {
            args: Prisma.OfficerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OfficerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OfficerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerPayload>[]
          }
          upsert: {
            args: Prisma.OfficerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfficerPayload>
          }
          aggregate: {
            args: Prisma.OfficerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOfficer>
          }
          groupBy: {
            args: Prisma.OfficerGroupByArgs<ExtArgs>
            result: $Utils.Optional<OfficerGroupByOutputType>[]
          }
          count: {
            args: Prisma.OfficerCountArgs<ExtArgs>
            result: $Utils.Optional<OfficerCountAggregateOutputType> | number
          }
        }
      }
      Site: {
        payload: Prisma.$SitePayload<ExtArgs>
        fields: Prisma.SiteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SiteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SiteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          findFirst: {
            args: Prisma.SiteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SiteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          findMany: {
            args: Prisma.SiteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>[]
          }
          create: {
            args: Prisma.SiteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          createMany: {
            args: Prisma.SiteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SiteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>[]
          }
          delete: {
            args: Prisma.SiteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          update: {
            args: Prisma.SiteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          deleteMany: {
            args: Prisma.SiteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SiteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SiteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>[]
          }
          upsert: {
            args: Prisma.SiteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          aggregate: {
            args: Prisma.SiteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSite>
          }
          groupBy: {
            args: Prisma.SiteGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiteGroupByOutputType>[]
          }
          count: {
            args: Prisma.SiteCountArgs<ExtArgs>
            result: $Utils.Optional<SiteCountAggregateOutputType> | number
          }
        }
      }
      Do: {
        payload: Prisma.$DoPayload<ExtArgs>
        fields: Prisma.DoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoPayload>
          }
          findFirst: {
            args: Prisma.DoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoPayload>
          }
          findMany: {
            args: Prisma.DoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoPayload>[]
          }
          create: {
            args: Prisma.DoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoPayload>
          }
          createMany: {
            args: Prisma.DoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoPayload>[]
          }
          delete: {
            args: Prisma.DoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoPayload>
          }
          update: {
            args: Prisma.DoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoPayload>
          }
          deleteMany: {
            args: Prisma.DoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoPayload>[]
          }
          upsert: {
            args: Prisma.DoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoPayload>
          }
          aggregate: {
            args: Prisma.DoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDo>
          }
          groupBy: {
            args: Prisma.DoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoCountArgs<ExtArgs>
            result: $Utils.Optional<DoCountAggregateOutputType> | number
          }
        }
      }
      Doline: {
        payload: Prisma.$DolinePayload<ExtArgs>
        fields: Prisma.DolineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DolineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DolinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DolineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DolinePayload>
          }
          findFirst: {
            args: Prisma.DolineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DolinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DolineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DolinePayload>
          }
          findMany: {
            args: Prisma.DolineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DolinePayload>[]
          }
          create: {
            args: Prisma.DolineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DolinePayload>
          }
          createMany: {
            args: Prisma.DolineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DolineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DolinePayload>[]
          }
          delete: {
            args: Prisma.DolineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DolinePayload>
          }
          update: {
            args: Prisma.DolineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DolinePayload>
          }
          deleteMany: {
            args: Prisma.DolineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DolineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DolineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DolinePayload>[]
          }
          upsert: {
            args: Prisma.DolineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DolinePayload>
          }
          aggregate: {
            args: Prisma.DolineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoline>
          }
          groupBy: {
            args: Prisma.DolineGroupByArgs<ExtArgs>
            result: $Utils.Optional<DolineGroupByOutputType>[]
          }
          count: {
            args: Prisma.DolineCountArgs<ExtArgs>
            result: $Utils.Optional<DolineCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    customer?: CustomerOmit
    item?: ItemOmit
    officer?: OfficerOmit
    site?: SiteOmit
    do?: DoOmit
    doline?: DolineOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    dos: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dos?: boolean | CustomerCountOutputTypeCountDosArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountDosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoWhereInput
  }


  /**
   * Count Type ItemCountOutputType
   */

  export type ItemCountOutputType = {
    dolines: number
  }

  export type ItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dolines?: boolean | ItemCountOutputTypeCountDolinesArgs
  }

  // Custom InputTypes
  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCountOutputType
     */
    select?: ItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountDolinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DolineWhereInput
  }


  /**
   * Count Type OfficerCountOutputType
   */

  export type OfficerCountOutputType = {
    sites: number
  }

  export type OfficerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sites?: boolean | OfficerCountOutputTypeCountSitesArgs
  }

  // Custom InputTypes
  /**
   * OfficerCountOutputType without action
   */
  export type OfficerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfficerCountOutputType
     */
    select?: OfficerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OfficerCountOutputType without action
   */
  export type OfficerCountOutputTypeCountSitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteWhereInput
  }


  /**
   * Count Type SiteCountOutputType
   */

  export type SiteCountOutputType = {
    dolines: number
  }

  export type SiteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dolines?: boolean | SiteCountOutputTypeCountDolinesArgs
  }

  // Custom InputTypes
  /**
   * SiteCountOutputType without action
   */
  export type SiteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteCountOutputType
     */
    select?: SiteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SiteCountOutputType without action
   */
  export type SiteCountOutputTypeCountDolinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DolineWhereInput
  }


  /**
   * Count Type DoCountOutputType
   */

  export type DoCountOutputType = {
    dolines: number
  }

  export type DoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dolines?: boolean | DoCountOutputTypeCountDolinesArgs
  }

  // Custom InputTypes
  /**
   * DoCountOutputType without action
   */
  export type DoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoCountOutputType
     */
    select?: DoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DoCountOutputType without action
   */
  export type DoCountOutputTypeCountDolinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DolineWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    phone: string | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    phone: string | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    address: number
    phone: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    name: string
    address: string
    phone: string
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    dos?: boolean | Customer$dosArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "phone", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dos?: boolean | Customer$dosArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      dos: Prisma.$DoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string
      phone: string
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dos<T extends Customer$dosArgs<ExtArgs> = {}>(args?: Subset<T, Customer$dosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly address: FieldRef<"Customer", 'String'>
    readonly phone: FieldRef<"Customer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.dos
   */
  export type Customer$dosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Do
     */
    select?: DoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Do
     */
    omit?: DoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoInclude<ExtArgs> | null
    where?: DoWhereInput
    orderBy?: DoOrderByWithRelationInput | DoOrderByWithRelationInput[]
    cursor?: DoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoScalarFieldEnum | DoScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemMinAggregateOutputType = {
    id: string | null
    name: string | null
    uom: string | null
  }

  export type ItemMaxAggregateOutputType = {
    id: string | null
    name: string | null
    uom: string | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    name: number
    uom: number
    _all: number
  }


  export type ItemMinAggregateInputType = {
    id?: true
    name?: true
    uom?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    name?: true
    uom?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    name?: true
    uom?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithAggregationInput | ItemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    id: string
    name: string
    uom: string
    _count: ItemCountAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    uom?: boolean
    dolines?: boolean | Item$dolinesArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    uom?: boolean
  }, ExtArgs["result"]["item"]>

  export type ItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    uom?: boolean
  }, ExtArgs["result"]["item"]>

  export type ItemSelectScalar = {
    id?: boolean
    name?: boolean
    uom?: boolean
  }

  export type ItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "uom", ExtArgs["result"]["item"]>
  export type ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dolines?: boolean | Item$dolinesArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {
      dolines: Prisma.$DolinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      uom: string
    }, ExtArgs["result"]["item"]>
    composites: {}
  }

  type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> = $Result.GetResult<Prisma.$ItemPayload, S>

  type ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item'], meta: { name: 'Item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemFindUniqueArgs>(args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemFindFirstArgs>(args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemFindManyArgs>(args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
     */
    create<T extends ItemCreateArgs>(args: SelectSubset<T, ItemCreateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Items.
     * @param {ItemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemCreateManyArgs>(args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Items and returns the data saved in the database.
     * @param {ItemCreateManyAndReturnArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
     */
    delete<T extends ItemDeleteArgs>(args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemUpdateArgs>(args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemDeleteManyArgs>(args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemUpdateManyArgs>(args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items and returns the data updated in the database.
     * @param {ItemUpdateManyAndReturnArgs} args - Arguments to update many Items.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
     */
    upsert<T extends ItemUpsertArgs>(args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item model
   */
  readonly fields: ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dolines<T extends Item$dolinesArgs<ExtArgs> = {}>(args?: Subset<T, Item$dolinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DolinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Item model
   */
  interface ItemFieldRefs {
    readonly id: FieldRef<"Item", 'String'>
    readonly name: FieldRef<"Item", 'String'>
    readonly uom: FieldRef<"Item", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findMany
   */
  export type ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item create
   */
  export type ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to create a Item.
     */
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }

  /**
   * Item createMany
   */
  export type ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Item createManyAndReturn
   */
  export type ItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Item update
   */
  export type ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item updateManyAndReturn
   */
  export type ItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item upsert
   */
  export type ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }

  /**
   * Item delete
   */
  export type ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to delete.
     */
    limit?: number
  }

  /**
   * Item.dolines
   */
  export type Item$dolinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doline
     */
    select?: DolineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doline
     */
    omit?: DolineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DolineInclude<ExtArgs> | null
    where?: DolineWhereInput
    orderBy?: DolineOrderByWithRelationInput | DolineOrderByWithRelationInput[]
    cursor?: DolineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DolineScalarFieldEnum | DolineScalarFieldEnum[]
  }

  /**
   * Item without action
   */
  export type ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
  }


  /**
   * Model Officer
   */

  export type AggregateOfficer = {
    _count: OfficerCountAggregateOutputType | null
    _min: OfficerMinAggregateOutputType | null
    _max: OfficerMaxAggregateOutputType | null
  }

  export type OfficerMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    account: string | null
  }

  export type OfficerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    account: string | null
  }

  export type OfficerCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    account: number
    _all: number
  }


  export type OfficerMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    account?: true
  }

  export type OfficerMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    account?: true
  }

  export type OfficerCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    account?: true
    _all?: true
  }

  export type OfficerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Officer to aggregate.
     */
    where?: OfficerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Officers to fetch.
     */
    orderBy?: OfficerOrderByWithRelationInput | OfficerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OfficerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Officers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Officers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Officers
    **/
    _count?: true | OfficerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OfficerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OfficerMaxAggregateInputType
  }

  export type GetOfficerAggregateType<T extends OfficerAggregateArgs> = {
        [P in keyof T & keyof AggregateOfficer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOfficer[P]>
      : GetScalarType<T[P], AggregateOfficer[P]>
  }




  export type OfficerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfficerWhereInput
    orderBy?: OfficerOrderByWithAggregationInput | OfficerOrderByWithAggregationInput[]
    by: OfficerScalarFieldEnum[] | OfficerScalarFieldEnum
    having?: OfficerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OfficerCountAggregateInputType | true
    _min?: OfficerMinAggregateInputType
    _max?: OfficerMaxAggregateInputType
  }

  export type OfficerGroupByOutputType = {
    id: string
    name: string
    phone: string
    account: string
    _count: OfficerCountAggregateOutputType | null
    _min: OfficerMinAggregateOutputType | null
    _max: OfficerMaxAggregateOutputType | null
  }

  type GetOfficerGroupByPayload<T extends OfficerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OfficerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OfficerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OfficerGroupByOutputType[P]>
            : GetScalarType<T[P], OfficerGroupByOutputType[P]>
        }
      >
    >


  export type OfficerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    account?: boolean
    sites?: boolean | Officer$sitesArgs<ExtArgs>
    _count?: boolean | OfficerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["officer"]>

  export type OfficerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    account?: boolean
  }, ExtArgs["result"]["officer"]>

  export type OfficerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    account?: boolean
  }, ExtArgs["result"]["officer"]>

  export type OfficerSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    account?: boolean
  }

  export type OfficerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "account", ExtArgs["result"]["officer"]>
  export type OfficerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sites?: boolean | Officer$sitesArgs<ExtArgs>
    _count?: boolean | OfficerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OfficerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OfficerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OfficerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Officer"
    objects: {
      sites: Prisma.$SitePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      phone: string
      account: string
    }, ExtArgs["result"]["officer"]>
    composites: {}
  }

  type OfficerGetPayload<S extends boolean | null | undefined | OfficerDefaultArgs> = $Result.GetResult<Prisma.$OfficerPayload, S>

  type OfficerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OfficerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OfficerCountAggregateInputType | true
    }

  export interface OfficerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Officer'], meta: { name: 'Officer' } }
    /**
     * Find zero or one Officer that matches the filter.
     * @param {OfficerFindUniqueArgs} args - Arguments to find a Officer
     * @example
     * // Get one Officer
     * const officer = await prisma.officer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OfficerFindUniqueArgs>(args: SelectSubset<T, OfficerFindUniqueArgs<ExtArgs>>): Prisma__OfficerClient<$Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Officer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OfficerFindUniqueOrThrowArgs} args - Arguments to find a Officer
     * @example
     * // Get one Officer
     * const officer = await prisma.officer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OfficerFindUniqueOrThrowArgs>(args: SelectSubset<T, OfficerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OfficerClient<$Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Officer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficerFindFirstArgs} args - Arguments to find a Officer
     * @example
     * // Get one Officer
     * const officer = await prisma.officer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OfficerFindFirstArgs>(args?: SelectSubset<T, OfficerFindFirstArgs<ExtArgs>>): Prisma__OfficerClient<$Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Officer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficerFindFirstOrThrowArgs} args - Arguments to find a Officer
     * @example
     * // Get one Officer
     * const officer = await prisma.officer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OfficerFindFirstOrThrowArgs>(args?: SelectSubset<T, OfficerFindFirstOrThrowArgs<ExtArgs>>): Prisma__OfficerClient<$Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Officers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Officers
     * const officers = await prisma.officer.findMany()
     * 
     * // Get first 10 Officers
     * const officers = await prisma.officer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const officerWithIdOnly = await prisma.officer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OfficerFindManyArgs>(args?: SelectSubset<T, OfficerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Officer.
     * @param {OfficerCreateArgs} args - Arguments to create a Officer.
     * @example
     * // Create one Officer
     * const Officer = await prisma.officer.create({
     *   data: {
     *     // ... data to create a Officer
     *   }
     * })
     * 
     */
    create<T extends OfficerCreateArgs>(args: SelectSubset<T, OfficerCreateArgs<ExtArgs>>): Prisma__OfficerClient<$Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Officers.
     * @param {OfficerCreateManyArgs} args - Arguments to create many Officers.
     * @example
     * // Create many Officers
     * const officer = await prisma.officer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OfficerCreateManyArgs>(args?: SelectSubset<T, OfficerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Officers and returns the data saved in the database.
     * @param {OfficerCreateManyAndReturnArgs} args - Arguments to create many Officers.
     * @example
     * // Create many Officers
     * const officer = await prisma.officer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Officers and only return the `id`
     * const officerWithIdOnly = await prisma.officer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OfficerCreateManyAndReturnArgs>(args?: SelectSubset<T, OfficerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Officer.
     * @param {OfficerDeleteArgs} args - Arguments to delete one Officer.
     * @example
     * // Delete one Officer
     * const Officer = await prisma.officer.delete({
     *   where: {
     *     // ... filter to delete one Officer
     *   }
     * })
     * 
     */
    delete<T extends OfficerDeleteArgs>(args: SelectSubset<T, OfficerDeleteArgs<ExtArgs>>): Prisma__OfficerClient<$Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Officer.
     * @param {OfficerUpdateArgs} args - Arguments to update one Officer.
     * @example
     * // Update one Officer
     * const officer = await prisma.officer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OfficerUpdateArgs>(args: SelectSubset<T, OfficerUpdateArgs<ExtArgs>>): Prisma__OfficerClient<$Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Officers.
     * @param {OfficerDeleteManyArgs} args - Arguments to filter Officers to delete.
     * @example
     * // Delete a few Officers
     * const { count } = await prisma.officer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OfficerDeleteManyArgs>(args?: SelectSubset<T, OfficerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Officers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Officers
     * const officer = await prisma.officer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OfficerUpdateManyArgs>(args: SelectSubset<T, OfficerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Officers and returns the data updated in the database.
     * @param {OfficerUpdateManyAndReturnArgs} args - Arguments to update many Officers.
     * @example
     * // Update many Officers
     * const officer = await prisma.officer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Officers and only return the `id`
     * const officerWithIdOnly = await prisma.officer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OfficerUpdateManyAndReturnArgs>(args: SelectSubset<T, OfficerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Officer.
     * @param {OfficerUpsertArgs} args - Arguments to update or create a Officer.
     * @example
     * // Update or create a Officer
     * const officer = await prisma.officer.upsert({
     *   create: {
     *     // ... data to create a Officer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Officer we want to update
     *   }
     * })
     */
    upsert<T extends OfficerUpsertArgs>(args: SelectSubset<T, OfficerUpsertArgs<ExtArgs>>): Prisma__OfficerClient<$Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Officers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficerCountArgs} args - Arguments to filter Officers to count.
     * @example
     * // Count the number of Officers
     * const count = await prisma.officer.count({
     *   where: {
     *     // ... the filter for the Officers we want to count
     *   }
     * })
    **/
    count<T extends OfficerCountArgs>(
      args?: Subset<T, OfficerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OfficerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Officer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OfficerAggregateArgs>(args: Subset<T, OfficerAggregateArgs>): Prisma.PrismaPromise<GetOfficerAggregateType<T>>

    /**
     * Group by Officer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfficerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OfficerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OfficerGroupByArgs['orderBy'] }
        : { orderBy?: OfficerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OfficerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOfficerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Officer model
   */
  readonly fields: OfficerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Officer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OfficerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sites<T extends Officer$sitesArgs<ExtArgs> = {}>(args?: Subset<T, Officer$sitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Officer model
   */
  interface OfficerFieldRefs {
    readonly id: FieldRef<"Officer", 'String'>
    readonly name: FieldRef<"Officer", 'String'>
    readonly phone: FieldRef<"Officer", 'String'>
    readonly account: FieldRef<"Officer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Officer findUnique
   */
  export type OfficerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Officer
     */
    select?: OfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Officer
     */
    omit?: OfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerInclude<ExtArgs> | null
    /**
     * Filter, which Officer to fetch.
     */
    where: OfficerWhereUniqueInput
  }

  /**
   * Officer findUniqueOrThrow
   */
  export type OfficerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Officer
     */
    select?: OfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Officer
     */
    omit?: OfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerInclude<ExtArgs> | null
    /**
     * Filter, which Officer to fetch.
     */
    where: OfficerWhereUniqueInput
  }

  /**
   * Officer findFirst
   */
  export type OfficerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Officer
     */
    select?: OfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Officer
     */
    omit?: OfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerInclude<ExtArgs> | null
    /**
     * Filter, which Officer to fetch.
     */
    where?: OfficerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Officers to fetch.
     */
    orderBy?: OfficerOrderByWithRelationInput | OfficerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Officers.
     */
    cursor?: OfficerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Officers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Officers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Officers.
     */
    distinct?: OfficerScalarFieldEnum | OfficerScalarFieldEnum[]
  }

  /**
   * Officer findFirstOrThrow
   */
  export type OfficerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Officer
     */
    select?: OfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Officer
     */
    omit?: OfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerInclude<ExtArgs> | null
    /**
     * Filter, which Officer to fetch.
     */
    where?: OfficerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Officers to fetch.
     */
    orderBy?: OfficerOrderByWithRelationInput | OfficerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Officers.
     */
    cursor?: OfficerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Officers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Officers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Officers.
     */
    distinct?: OfficerScalarFieldEnum | OfficerScalarFieldEnum[]
  }

  /**
   * Officer findMany
   */
  export type OfficerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Officer
     */
    select?: OfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Officer
     */
    omit?: OfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerInclude<ExtArgs> | null
    /**
     * Filter, which Officers to fetch.
     */
    where?: OfficerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Officers to fetch.
     */
    orderBy?: OfficerOrderByWithRelationInput | OfficerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Officers.
     */
    cursor?: OfficerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Officers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Officers.
     */
    skip?: number
    distinct?: OfficerScalarFieldEnum | OfficerScalarFieldEnum[]
  }

  /**
   * Officer create
   */
  export type OfficerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Officer
     */
    select?: OfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Officer
     */
    omit?: OfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerInclude<ExtArgs> | null
    /**
     * The data needed to create a Officer.
     */
    data: XOR<OfficerCreateInput, OfficerUncheckedCreateInput>
  }

  /**
   * Officer createMany
   */
  export type OfficerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Officers.
     */
    data: OfficerCreateManyInput | OfficerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Officer createManyAndReturn
   */
  export type OfficerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Officer
     */
    select?: OfficerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Officer
     */
    omit?: OfficerOmit<ExtArgs> | null
    /**
     * The data used to create many Officers.
     */
    data: OfficerCreateManyInput | OfficerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Officer update
   */
  export type OfficerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Officer
     */
    select?: OfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Officer
     */
    omit?: OfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerInclude<ExtArgs> | null
    /**
     * The data needed to update a Officer.
     */
    data: XOR<OfficerUpdateInput, OfficerUncheckedUpdateInput>
    /**
     * Choose, which Officer to update.
     */
    where: OfficerWhereUniqueInput
  }

  /**
   * Officer updateMany
   */
  export type OfficerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Officers.
     */
    data: XOR<OfficerUpdateManyMutationInput, OfficerUncheckedUpdateManyInput>
    /**
     * Filter which Officers to update
     */
    where?: OfficerWhereInput
    /**
     * Limit how many Officers to update.
     */
    limit?: number
  }

  /**
   * Officer updateManyAndReturn
   */
  export type OfficerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Officer
     */
    select?: OfficerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Officer
     */
    omit?: OfficerOmit<ExtArgs> | null
    /**
     * The data used to update Officers.
     */
    data: XOR<OfficerUpdateManyMutationInput, OfficerUncheckedUpdateManyInput>
    /**
     * Filter which Officers to update
     */
    where?: OfficerWhereInput
    /**
     * Limit how many Officers to update.
     */
    limit?: number
  }

  /**
   * Officer upsert
   */
  export type OfficerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Officer
     */
    select?: OfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Officer
     */
    omit?: OfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerInclude<ExtArgs> | null
    /**
     * The filter to search for the Officer to update in case it exists.
     */
    where: OfficerWhereUniqueInput
    /**
     * In case the Officer found by the `where` argument doesn't exist, create a new Officer with this data.
     */
    create: XOR<OfficerCreateInput, OfficerUncheckedCreateInput>
    /**
     * In case the Officer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OfficerUpdateInput, OfficerUncheckedUpdateInput>
  }

  /**
   * Officer delete
   */
  export type OfficerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Officer
     */
    select?: OfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Officer
     */
    omit?: OfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerInclude<ExtArgs> | null
    /**
     * Filter which Officer to delete.
     */
    where: OfficerWhereUniqueInput
  }

  /**
   * Officer deleteMany
   */
  export type OfficerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Officers to delete
     */
    where?: OfficerWhereInput
    /**
     * Limit how many Officers to delete.
     */
    limit?: number
  }

  /**
   * Officer.sites
   */
  export type Officer$sitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    where?: SiteWhereInput
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    cursor?: SiteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * Officer without action
   */
  export type OfficerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Officer
     */
    select?: OfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Officer
     */
    omit?: OfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerInclude<ExtArgs> | null
  }


  /**
   * Model Site
   */

  export type AggregateSite = {
    _count: SiteCountAggregateOutputType | null
    _min: SiteMinAggregateOutputType | null
    _max: SiteMaxAggregateOutputType | null
  }

  export type SiteMinAggregateOutputType = {
    id: string | null
    name: string | null
    officerId: string | null
  }

  export type SiteMaxAggregateOutputType = {
    id: string | null
    name: string | null
    officerId: string | null
  }

  export type SiteCountAggregateOutputType = {
    id: number
    name: number
    officerId: number
    _all: number
  }


  export type SiteMinAggregateInputType = {
    id?: true
    name?: true
    officerId?: true
  }

  export type SiteMaxAggregateInputType = {
    id?: true
    name?: true
    officerId?: true
  }

  export type SiteCountAggregateInputType = {
    id?: true
    name?: true
    officerId?: true
    _all?: true
  }

  export type SiteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Site to aggregate.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sites
    **/
    _count?: true | SiteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiteMaxAggregateInputType
  }

  export type GetSiteAggregateType<T extends SiteAggregateArgs> = {
        [P in keyof T & keyof AggregateSite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSite[P]>
      : GetScalarType<T[P], AggregateSite[P]>
  }




  export type SiteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteWhereInput
    orderBy?: SiteOrderByWithAggregationInput | SiteOrderByWithAggregationInput[]
    by: SiteScalarFieldEnum[] | SiteScalarFieldEnum
    having?: SiteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiteCountAggregateInputType | true
    _min?: SiteMinAggregateInputType
    _max?: SiteMaxAggregateInputType
  }

  export type SiteGroupByOutputType = {
    id: string
    name: string
    officerId: string | null
    _count: SiteCountAggregateOutputType | null
    _min: SiteMinAggregateOutputType | null
    _max: SiteMaxAggregateOutputType | null
  }

  type GetSiteGroupByPayload<T extends SiteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiteGroupByOutputType[P]>
            : GetScalarType<T[P], SiteGroupByOutputType[P]>
        }
      >
    >


  export type SiteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    officerId?: boolean
    officer?: boolean | Site$officerArgs<ExtArgs>
    dolines?: boolean | Site$dolinesArgs<ExtArgs>
    _count?: boolean | SiteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["site"]>

  export type SiteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    officerId?: boolean
    officer?: boolean | Site$officerArgs<ExtArgs>
  }, ExtArgs["result"]["site"]>

  export type SiteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    officerId?: boolean
    officer?: boolean | Site$officerArgs<ExtArgs>
  }, ExtArgs["result"]["site"]>

  export type SiteSelectScalar = {
    id?: boolean
    name?: boolean
    officerId?: boolean
  }

  export type SiteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "officerId", ExtArgs["result"]["site"]>
  export type SiteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    officer?: boolean | Site$officerArgs<ExtArgs>
    dolines?: boolean | Site$dolinesArgs<ExtArgs>
    _count?: boolean | SiteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SiteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    officer?: boolean | Site$officerArgs<ExtArgs>
  }
  export type SiteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    officer?: boolean | Site$officerArgs<ExtArgs>
  }

  export type $SitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Site"
    objects: {
      officer: Prisma.$OfficerPayload<ExtArgs> | null
      dolines: Prisma.$DolinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      officerId: string | null
    }, ExtArgs["result"]["site"]>
    composites: {}
  }

  type SiteGetPayload<S extends boolean | null | undefined | SiteDefaultArgs> = $Result.GetResult<Prisma.$SitePayload, S>

  type SiteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SiteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SiteCountAggregateInputType | true
    }

  export interface SiteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Site'], meta: { name: 'Site' } }
    /**
     * Find zero or one Site that matches the filter.
     * @param {SiteFindUniqueArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SiteFindUniqueArgs>(args: SelectSubset<T, SiteFindUniqueArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Site that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SiteFindUniqueOrThrowArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SiteFindUniqueOrThrowArgs>(args: SelectSubset<T, SiteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Site that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteFindFirstArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SiteFindFirstArgs>(args?: SelectSubset<T, SiteFindFirstArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Site that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteFindFirstOrThrowArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SiteFindFirstOrThrowArgs>(args?: SelectSubset<T, SiteFindFirstOrThrowArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sites
     * const sites = await prisma.site.findMany()
     * 
     * // Get first 10 Sites
     * const sites = await prisma.site.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const siteWithIdOnly = await prisma.site.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SiteFindManyArgs>(args?: SelectSubset<T, SiteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Site.
     * @param {SiteCreateArgs} args - Arguments to create a Site.
     * @example
     * // Create one Site
     * const Site = await prisma.site.create({
     *   data: {
     *     // ... data to create a Site
     *   }
     * })
     * 
     */
    create<T extends SiteCreateArgs>(args: SelectSubset<T, SiteCreateArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sites.
     * @param {SiteCreateManyArgs} args - Arguments to create many Sites.
     * @example
     * // Create many Sites
     * const site = await prisma.site.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SiteCreateManyArgs>(args?: SelectSubset<T, SiteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sites and returns the data saved in the database.
     * @param {SiteCreateManyAndReturnArgs} args - Arguments to create many Sites.
     * @example
     * // Create many Sites
     * const site = await prisma.site.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sites and only return the `id`
     * const siteWithIdOnly = await prisma.site.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SiteCreateManyAndReturnArgs>(args?: SelectSubset<T, SiteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Site.
     * @param {SiteDeleteArgs} args - Arguments to delete one Site.
     * @example
     * // Delete one Site
     * const Site = await prisma.site.delete({
     *   where: {
     *     // ... filter to delete one Site
     *   }
     * })
     * 
     */
    delete<T extends SiteDeleteArgs>(args: SelectSubset<T, SiteDeleteArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Site.
     * @param {SiteUpdateArgs} args - Arguments to update one Site.
     * @example
     * // Update one Site
     * const site = await prisma.site.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SiteUpdateArgs>(args: SelectSubset<T, SiteUpdateArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sites.
     * @param {SiteDeleteManyArgs} args - Arguments to filter Sites to delete.
     * @example
     * // Delete a few Sites
     * const { count } = await prisma.site.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SiteDeleteManyArgs>(args?: SelectSubset<T, SiteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sites
     * const site = await prisma.site.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SiteUpdateManyArgs>(args: SelectSubset<T, SiteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sites and returns the data updated in the database.
     * @param {SiteUpdateManyAndReturnArgs} args - Arguments to update many Sites.
     * @example
     * // Update many Sites
     * const site = await prisma.site.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sites and only return the `id`
     * const siteWithIdOnly = await prisma.site.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SiteUpdateManyAndReturnArgs>(args: SelectSubset<T, SiteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Site.
     * @param {SiteUpsertArgs} args - Arguments to update or create a Site.
     * @example
     * // Update or create a Site
     * const site = await prisma.site.upsert({
     *   create: {
     *     // ... data to create a Site
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Site we want to update
     *   }
     * })
     */
    upsert<T extends SiteUpsertArgs>(args: SelectSubset<T, SiteUpsertArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteCountArgs} args - Arguments to filter Sites to count.
     * @example
     * // Count the number of Sites
     * const count = await prisma.site.count({
     *   where: {
     *     // ... the filter for the Sites we want to count
     *   }
     * })
    **/
    count<T extends SiteCountArgs>(
      args?: Subset<T, SiteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Site.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SiteAggregateArgs>(args: Subset<T, SiteAggregateArgs>): Prisma.PrismaPromise<GetSiteAggregateType<T>>

    /**
     * Group by Site.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SiteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SiteGroupByArgs['orderBy'] }
        : { orderBy?: SiteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Site model
   */
  readonly fields: SiteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Site.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SiteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    officer<T extends Site$officerArgs<ExtArgs> = {}>(args?: Subset<T, Site$officerArgs<ExtArgs>>): Prisma__OfficerClient<$Result.GetResult<Prisma.$OfficerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    dolines<T extends Site$dolinesArgs<ExtArgs> = {}>(args?: Subset<T, Site$dolinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DolinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Site model
   */
  interface SiteFieldRefs {
    readonly id: FieldRef<"Site", 'String'>
    readonly name: FieldRef<"Site", 'String'>
    readonly officerId: FieldRef<"Site", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Site findUnique
   */
  export type SiteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site findUniqueOrThrow
   */
  export type SiteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site findFirst
   */
  export type SiteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sites.
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sites.
     */
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * Site findFirstOrThrow
   */
  export type SiteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sites.
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sites.
     */
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * Site findMany
   */
  export type SiteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Sites to fetch.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sites.
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * Site create
   */
  export type SiteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * The data needed to create a Site.
     */
    data: XOR<SiteCreateInput, SiteUncheckedCreateInput>
  }

  /**
   * Site createMany
   */
  export type SiteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sites.
     */
    data: SiteCreateManyInput | SiteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Site createManyAndReturn
   */
  export type SiteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * The data used to create many Sites.
     */
    data: SiteCreateManyInput | SiteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Site update
   */
  export type SiteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * The data needed to update a Site.
     */
    data: XOR<SiteUpdateInput, SiteUncheckedUpdateInput>
    /**
     * Choose, which Site to update.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site updateMany
   */
  export type SiteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sites.
     */
    data: XOR<SiteUpdateManyMutationInput, SiteUncheckedUpdateManyInput>
    /**
     * Filter which Sites to update
     */
    where?: SiteWhereInput
    /**
     * Limit how many Sites to update.
     */
    limit?: number
  }

  /**
   * Site updateManyAndReturn
   */
  export type SiteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * The data used to update Sites.
     */
    data: XOR<SiteUpdateManyMutationInput, SiteUncheckedUpdateManyInput>
    /**
     * Filter which Sites to update
     */
    where?: SiteWhereInput
    /**
     * Limit how many Sites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Site upsert
   */
  export type SiteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * The filter to search for the Site to update in case it exists.
     */
    where: SiteWhereUniqueInput
    /**
     * In case the Site found by the `where` argument doesn't exist, create a new Site with this data.
     */
    create: XOR<SiteCreateInput, SiteUncheckedCreateInput>
    /**
     * In case the Site was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SiteUpdateInput, SiteUncheckedUpdateInput>
  }

  /**
   * Site delete
   */
  export type SiteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter which Site to delete.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site deleteMany
   */
  export type SiteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sites to delete
     */
    where?: SiteWhereInput
    /**
     * Limit how many Sites to delete.
     */
    limit?: number
  }

  /**
   * Site.officer
   */
  export type Site$officerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Officer
     */
    select?: OfficerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Officer
     */
    omit?: OfficerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfficerInclude<ExtArgs> | null
    where?: OfficerWhereInput
  }

  /**
   * Site.dolines
   */
  export type Site$dolinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doline
     */
    select?: DolineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doline
     */
    omit?: DolineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DolineInclude<ExtArgs> | null
    where?: DolineWhereInput
    orderBy?: DolineOrderByWithRelationInput | DolineOrderByWithRelationInput[]
    cursor?: DolineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DolineScalarFieldEnum | DolineScalarFieldEnum[]
  }

  /**
   * Site without action
   */
  export type SiteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
  }


  /**
   * Model Do
   */

  export type AggregateDo = {
    _count: DoCountAggregateOutputType | null
    _min: DoMinAggregateOutputType | null
    _max: DoMaxAggregateOutputType | null
  }

  export type DoMinAggregateOutputType = {
    id: string | null
    number: string | null
    customerId: string | null
    date: Date | null
    project: string | null
  }

  export type DoMaxAggregateOutputType = {
    id: string | null
    number: string | null
    customerId: string | null
    date: Date | null
    project: string | null
  }

  export type DoCountAggregateOutputType = {
    id: number
    number: number
    customerId: number
    date: number
    project: number
    _all: number
  }


  export type DoMinAggregateInputType = {
    id?: true
    number?: true
    customerId?: true
    date?: true
    project?: true
  }

  export type DoMaxAggregateInputType = {
    id?: true
    number?: true
    customerId?: true
    date?: true
    project?: true
  }

  export type DoCountAggregateInputType = {
    id?: true
    number?: true
    customerId?: true
    date?: true
    project?: true
    _all?: true
  }

  export type DoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Do to aggregate.
     */
    where?: DoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dos to fetch.
     */
    orderBy?: DoOrderByWithRelationInput | DoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dos
    **/
    _count?: true | DoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoMaxAggregateInputType
  }

  export type GetDoAggregateType<T extends DoAggregateArgs> = {
        [P in keyof T & keyof AggregateDo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDo[P]>
      : GetScalarType<T[P], AggregateDo[P]>
  }




  export type DoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoWhereInput
    orderBy?: DoOrderByWithAggregationInput | DoOrderByWithAggregationInput[]
    by: DoScalarFieldEnum[] | DoScalarFieldEnum
    having?: DoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoCountAggregateInputType | true
    _min?: DoMinAggregateInputType
    _max?: DoMaxAggregateInputType
  }

  export type DoGroupByOutputType = {
    id: string
    number: string
    customerId: string
    date: Date
    project: string
    _count: DoCountAggregateOutputType | null
    _min: DoMinAggregateOutputType | null
    _max: DoMaxAggregateOutputType | null
  }

  type GetDoGroupByPayload<T extends DoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoGroupByOutputType[P]>
            : GetScalarType<T[P], DoGroupByOutputType[P]>
        }
      >
    >


  export type DoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    customerId?: boolean
    date?: boolean
    project?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    dolines?: boolean | Do$dolinesArgs<ExtArgs>
    _count?: boolean | DoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["do"]>

  export type DoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    customerId?: boolean
    date?: boolean
    project?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["do"]>

  export type DoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    customerId?: boolean
    date?: boolean
    project?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["do"]>

  export type DoSelectScalar = {
    id?: boolean
    number?: boolean
    customerId?: boolean
    date?: boolean
    project?: boolean
  }

  export type DoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "number" | "customerId" | "date" | "project", ExtArgs["result"]["do"]>
  export type DoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    dolines?: boolean | Do$dolinesArgs<ExtArgs>
    _count?: boolean | DoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type DoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $DoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Do"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      dolines: Prisma.$DolinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      number: string
      customerId: string
      date: Date
      project: string
    }, ExtArgs["result"]["do"]>
    composites: {}
  }

  type DoGetPayload<S extends boolean | null | undefined | DoDefaultArgs> = $Result.GetResult<Prisma.$DoPayload, S>

  type DoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoCountAggregateInputType | true
    }

  export interface DoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Do'], meta: { name: 'Do' } }
    /**
     * Find zero or one Do that matches the filter.
     * @param {DoFindUniqueArgs} args - Arguments to find a Do
     * @example
     * // Get one Do
     * const do = await prisma.do.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoFindUniqueArgs>(args: SelectSubset<T, DoFindUniqueArgs<ExtArgs>>): Prisma__DoClient<$Result.GetResult<Prisma.$DoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Do that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoFindUniqueOrThrowArgs} args - Arguments to find a Do
     * @example
     * // Get one Do
     * const do = await prisma.do.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoFindUniqueOrThrowArgs>(args: SelectSubset<T, DoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoClient<$Result.GetResult<Prisma.$DoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Do that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoFindFirstArgs} args - Arguments to find a Do
     * @example
     * // Get one Do
     * const do = await prisma.do.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoFindFirstArgs>(args?: SelectSubset<T, DoFindFirstArgs<ExtArgs>>): Prisma__DoClient<$Result.GetResult<Prisma.$DoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Do that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoFindFirstOrThrowArgs} args - Arguments to find a Do
     * @example
     * // Get one Do
     * const do = await prisma.do.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoFindFirstOrThrowArgs>(args?: SelectSubset<T, DoFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoClient<$Result.GetResult<Prisma.$DoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dos
     * const dos = await prisma.do.findMany()
     * 
     * // Get first 10 Dos
     * const dos = await prisma.do.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doWithIdOnly = await prisma.do.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoFindManyArgs>(args?: SelectSubset<T, DoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Do.
     * @param {DoCreateArgs} args - Arguments to create a Do.
     * @example
     * // Create one Do
     * const Do = await prisma.do.create({
     *   data: {
     *     // ... data to create a Do
     *   }
     * })
     * 
     */
    create<T extends DoCreateArgs>(args: SelectSubset<T, DoCreateArgs<ExtArgs>>): Prisma__DoClient<$Result.GetResult<Prisma.$DoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dos.
     * @param {DoCreateManyArgs} args - Arguments to create many Dos.
     * @example
     * // Create many Dos
     * const do = await prisma.do.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoCreateManyArgs>(args?: SelectSubset<T, DoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dos and returns the data saved in the database.
     * @param {DoCreateManyAndReturnArgs} args - Arguments to create many Dos.
     * @example
     * // Create many Dos
     * const do = await prisma.do.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dos and only return the `id`
     * const doWithIdOnly = await prisma.do.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoCreateManyAndReturnArgs>(args?: SelectSubset<T, DoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Do.
     * @param {DoDeleteArgs} args - Arguments to delete one Do.
     * @example
     * // Delete one Do
     * const Do = await prisma.do.delete({
     *   where: {
     *     // ... filter to delete one Do
     *   }
     * })
     * 
     */
    delete<T extends DoDeleteArgs>(args: SelectSubset<T, DoDeleteArgs<ExtArgs>>): Prisma__DoClient<$Result.GetResult<Prisma.$DoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Do.
     * @param {DoUpdateArgs} args - Arguments to update one Do.
     * @example
     * // Update one Do
     * const do = await prisma.do.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoUpdateArgs>(args: SelectSubset<T, DoUpdateArgs<ExtArgs>>): Prisma__DoClient<$Result.GetResult<Prisma.$DoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dos.
     * @param {DoDeleteManyArgs} args - Arguments to filter Dos to delete.
     * @example
     * // Delete a few Dos
     * const { count } = await prisma.do.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoDeleteManyArgs>(args?: SelectSubset<T, DoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dos
     * const do = await prisma.do.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoUpdateManyArgs>(args: SelectSubset<T, DoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dos and returns the data updated in the database.
     * @param {DoUpdateManyAndReturnArgs} args - Arguments to update many Dos.
     * @example
     * // Update many Dos
     * const do = await prisma.do.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dos and only return the `id`
     * const doWithIdOnly = await prisma.do.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DoUpdateManyAndReturnArgs>(args: SelectSubset<T, DoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Do.
     * @param {DoUpsertArgs} args - Arguments to update or create a Do.
     * @example
     * // Update or create a Do
     * const do = await prisma.do.upsert({
     *   create: {
     *     // ... data to create a Do
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Do we want to update
     *   }
     * })
     */
    upsert<T extends DoUpsertArgs>(args: SelectSubset<T, DoUpsertArgs<ExtArgs>>): Prisma__DoClient<$Result.GetResult<Prisma.$DoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoCountArgs} args - Arguments to filter Dos to count.
     * @example
     * // Count the number of Dos
     * const count = await prisma.do.count({
     *   where: {
     *     // ... the filter for the Dos we want to count
     *   }
     * })
    **/
    count<T extends DoCountArgs>(
      args?: Subset<T, DoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Do.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DoAggregateArgs>(args: Subset<T, DoAggregateArgs>): Prisma.PrismaPromise<GetDoAggregateType<T>>

    /**
     * Group by Do.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoGroupByArgs['orderBy'] }
        : { orderBy?: DoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Do model
   */
  readonly fields: DoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Do.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dolines<T extends Do$dolinesArgs<ExtArgs> = {}>(args?: Subset<T, Do$dolinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DolinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Do model
   */
  interface DoFieldRefs {
    readonly id: FieldRef<"Do", 'String'>
    readonly number: FieldRef<"Do", 'String'>
    readonly customerId: FieldRef<"Do", 'String'>
    readonly date: FieldRef<"Do", 'DateTime'>
    readonly project: FieldRef<"Do", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Do findUnique
   */
  export type DoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Do
     */
    select?: DoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Do
     */
    omit?: DoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoInclude<ExtArgs> | null
    /**
     * Filter, which Do to fetch.
     */
    where: DoWhereUniqueInput
  }

  /**
   * Do findUniqueOrThrow
   */
  export type DoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Do
     */
    select?: DoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Do
     */
    omit?: DoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoInclude<ExtArgs> | null
    /**
     * Filter, which Do to fetch.
     */
    where: DoWhereUniqueInput
  }

  /**
   * Do findFirst
   */
  export type DoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Do
     */
    select?: DoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Do
     */
    omit?: DoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoInclude<ExtArgs> | null
    /**
     * Filter, which Do to fetch.
     */
    where?: DoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dos to fetch.
     */
    orderBy?: DoOrderByWithRelationInput | DoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dos.
     */
    cursor?: DoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dos.
     */
    distinct?: DoScalarFieldEnum | DoScalarFieldEnum[]
  }

  /**
   * Do findFirstOrThrow
   */
  export type DoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Do
     */
    select?: DoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Do
     */
    omit?: DoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoInclude<ExtArgs> | null
    /**
     * Filter, which Do to fetch.
     */
    where?: DoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dos to fetch.
     */
    orderBy?: DoOrderByWithRelationInput | DoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dos.
     */
    cursor?: DoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dos.
     */
    distinct?: DoScalarFieldEnum | DoScalarFieldEnum[]
  }

  /**
   * Do findMany
   */
  export type DoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Do
     */
    select?: DoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Do
     */
    omit?: DoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoInclude<ExtArgs> | null
    /**
     * Filter, which Dos to fetch.
     */
    where?: DoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dos to fetch.
     */
    orderBy?: DoOrderByWithRelationInput | DoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dos.
     */
    cursor?: DoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dos.
     */
    skip?: number
    distinct?: DoScalarFieldEnum | DoScalarFieldEnum[]
  }

  /**
   * Do create
   */
  export type DoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Do
     */
    select?: DoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Do
     */
    omit?: DoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoInclude<ExtArgs> | null
    /**
     * The data needed to create a Do.
     */
    data: XOR<DoCreateInput, DoUncheckedCreateInput>
  }

  /**
   * Do createMany
   */
  export type DoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dos.
     */
    data: DoCreateManyInput | DoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Do createManyAndReturn
   */
  export type DoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Do
     */
    select?: DoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Do
     */
    omit?: DoOmit<ExtArgs> | null
    /**
     * The data used to create many Dos.
     */
    data: DoCreateManyInput | DoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Do update
   */
  export type DoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Do
     */
    select?: DoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Do
     */
    omit?: DoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoInclude<ExtArgs> | null
    /**
     * The data needed to update a Do.
     */
    data: XOR<DoUpdateInput, DoUncheckedUpdateInput>
    /**
     * Choose, which Do to update.
     */
    where: DoWhereUniqueInput
  }

  /**
   * Do updateMany
   */
  export type DoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dos.
     */
    data: XOR<DoUpdateManyMutationInput, DoUncheckedUpdateManyInput>
    /**
     * Filter which Dos to update
     */
    where?: DoWhereInput
    /**
     * Limit how many Dos to update.
     */
    limit?: number
  }

  /**
   * Do updateManyAndReturn
   */
  export type DoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Do
     */
    select?: DoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Do
     */
    omit?: DoOmit<ExtArgs> | null
    /**
     * The data used to update Dos.
     */
    data: XOR<DoUpdateManyMutationInput, DoUncheckedUpdateManyInput>
    /**
     * Filter which Dos to update
     */
    where?: DoWhereInput
    /**
     * Limit how many Dos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Do upsert
   */
  export type DoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Do
     */
    select?: DoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Do
     */
    omit?: DoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoInclude<ExtArgs> | null
    /**
     * The filter to search for the Do to update in case it exists.
     */
    where: DoWhereUniqueInput
    /**
     * In case the Do found by the `where` argument doesn't exist, create a new Do with this data.
     */
    create: XOR<DoCreateInput, DoUncheckedCreateInput>
    /**
     * In case the Do was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoUpdateInput, DoUncheckedUpdateInput>
  }

  /**
   * Do delete
   */
  export type DoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Do
     */
    select?: DoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Do
     */
    omit?: DoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoInclude<ExtArgs> | null
    /**
     * Filter which Do to delete.
     */
    where: DoWhereUniqueInput
  }

  /**
   * Do deleteMany
   */
  export type DoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dos to delete
     */
    where?: DoWhereInput
    /**
     * Limit how many Dos to delete.
     */
    limit?: number
  }

  /**
   * Do.dolines
   */
  export type Do$dolinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doline
     */
    select?: DolineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doline
     */
    omit?: DolineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DolineInclude<ExtArgs> | null
    where?: DolineWhereInput
    orderBy?: DolineOrderByWithRelationInput | DolineOrderByWithRelationInput[]
    cursor?: DolineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DolineScalarFieldEnum | DolineScalarFieldEnum[]
  }

  /**
   * Do without action
   */
  export type DoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Do
     */
    select?: DoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Do
     */
    omit?: DoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoInclude<ExtArgs> | null
  }


  /**
   * Model Doline
   */

  export type AggregateDoline = {
    _count: DolineCountAggregateOutputType | null
    _avg: DolineAvgAggregateOutputType | null
    _sum: DolineSumAggregateOutputType | null
    _min: DolineMinAggregateOutputType | null
    _max: DolineMaxAggregateOutputType | null
  }

  export type DolineAvgAggregateOutputType = {
    qty: number | null
  }

  export type DolineSumAggregateOutputType = {
    qty: number | null
  }

  export type DolineMinAggregateOutputType = {
    id: string | null
    doId: string | null
    siteId: string | null
    itemId: string | null
    qty: number | null
    startDate: Date | null
    endDate: Date | null
  }

  export type DolineMaxAggregateOutputType = {
    id: string | null
    doId: string | null
    siteId: string | null
    itemId: string | null
    qty: number | null
    startDate: Date | null
    endDate: Date | null
  }

  export type DolineCountAggregateOutputType = {
    id: number
    doId: number
    siteId: number
    itemId: number
    qty: number
    startDate: number
    endDate: number
    _all: number
  }


  export type DolineAvgAggregateInputType = {
    qty?: true
  }

  export type DolineSumAggregateInputType = {
    qty?: true
  }

  export type DolineMinAggregateInputType = {
    id?: true
    doId?: true
    siteId?: true
    itemId?: true
    qty?: true
    startDate?: true
    endDate?: true
  }

  export type DolineMaxAggregateInputType = {
    id?: true
    doId?: true
    siteId?: true
    itemId?: true
    qty?: true
    startDate?: true
    endDate?: true
  }

  export type DolineCountAggregateInputType = {
    id?: true
    doId?: true
    siteId?: true
    itemId?: true
    qty?: true
    startDate?: true
    endDate?: true
    _all?: true
  }

  export type DolineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doline to aggregate.
     */
    where?: DolineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dolines to fetch.
     */
    orderBy?: DolineOrderByWithRelationInput | DolineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DolineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dolines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dolines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dolines
    **/
    _count?: true | DolineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DolineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DolineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DolineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DolineMaxAggregateInputType
  }

  export type GetDolineAggregateType<T extends DolineAggregateArgs> = {
        [P in keyof T & keyof AggregateDoline]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoline[P]>
      : GetScalarType<T[P], AggregateDoline[P]>
  }




  export type DolineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DolineWhereInput
    orderBy?: DolineOrderByWithAggregationInput | DolineOrderByWithAggregationInput[]
    by: DolineScalarFieldEnum[] | DolineScalarFieldEnum
    having?: DolineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DolineCountAggregateInputType | true
    _avg?: DolineAvgAggregateInputType
    _sum?: DolineSumAggregateInputType
    _min?: DolineMinAggregateInputType
    _max?: DolineMaxAggregateInputType
  }

  export type DolineGroupByOutputType = {
    id: string
    doId: string
    siteId: string
    itemId: string
    qty: number
    startDate: Date
    endDate: Date
    _count: DolineCountAggregateOutputType | null
    _avg: DolineAvgAggregateOutputType | null
    _sum: DolineSumAggregateOutputType | null
    _min: DolineMinAggregateOutputType | null
    _max: DolineMaxAggregateOutputType | null
  }

  type GetDolineGroupByPayload<T extends DolineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DolineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DolineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DolineGroupByOutputType[P]>
            : GetScalarType<T[P], DolineGroupByOutputType[P]>
        }
      >
    >


  export type DolineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doId?: boolean
    siteId?: boolean
    itemId?: boolean
    qty?: boolean
    startDate?: boolean
    endDate?: boolean
    do?: boolean | DoDefaultArgs<ExtArgs>
    site?: boolean | SiteDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doline"]>

  export type DolineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doId?: boolean
    siteId?: boolean
    itemId?: boolean
    qty?: boolean
    startDate?: boolean
    endDate?: boolean
    do?: boolean | DoDefaultArgs<ExtArgs>
    site?: boolean | SiteDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doline"]>

  export type DolineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doId?: boolean
    siteId?: boolean
    itemId?: boolean
    qty?: boolean
    startDate?: boolean
    endDate?: boolean
    do?: boolean | DoDefaultArgs<ExtArgs>
    site?: boolean | SiteDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doline"]>

  export type DolineSelectScalar = {
    id?: boolean
    doId?: boolean
    siteId?: boolean
    itemId?: boolean
    qty?: boolean
    startDate?: boolean
    endDate?: boolean
  }

  export type DolineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "doId" | "siteId" | "itemId" | "qty" | "startDate" | "endDate", ExtArgs["result"]["doline"]>
  export type DolineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    do?: boolean | DoDefaultArgs<ExtArgs>
    site?: boolean | SiteDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type DolineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    do?: boolean | DoDefaultArgs<ExtArgs>
    site?: boolean | SiteDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type DolineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    do?: boolean | DoDefaultArgs<ExtArgs>
    site?: boolean | SiteDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }

  export type $DolinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Doline"
    objects: {
      do: Prisma.$DoPayload<ExtArgs>
      site: Prisma.$SitePayload<ExtArgs>
      item: Prisma.$ItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      doId: string
      siteId: string
      itemId: string
      qty: number
      startDate: Date
      endDate: Date
    }, ExtArgs["result"]["doline"]>
    composites: {}
  }

  type DolineGetPayload<S extends boolean | null | undefined | DolineDefaultArgs> = $Result.GetResult<Prisma.$DolinePayload, S>

  type DolineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DolineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DolineCountAggregateInputType | true
    }

  export interface DolineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Doline'], meta: { name: 'Doline' } }
    /**
     * Find zero or one Doline that matches the filter.
     * @param {DolineFindUniqueArgs} args - Arguments to find a Doline
     * @example
     * // Get one Doline
     * const doline = await prisma.doline.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DolineFindUniqueArgs>(args: SelectSubset<T, DolineFindUniqueArgs<ExtArgs>>): Prisma__DolineClient<$Result.GetResult<Prisma.$DolinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Doline that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DolineFindUniqueOrThrowArgs} args - Arguments to find a Doline
     * @example
     * // Get one Doline
     * const doline = await prisma.doline.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DolineFindUniqueOrThrowArgs>(args: SelectSubset<T, DolineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DolineClient<$Result.GetResult<Prisma.$DolinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doline that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DolineFindFirstArgs} args - Arguments to find a Doline
     * @example
     * // Get one Doline
     * const doline = await prisma.doline.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DolineFindFirstArgs>(args?: SelectSubset<T, DolineFindFirstArgs<ExtArgs>>): Prisma__DolineClient<$Result.GetResult<Prisma.$DolinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doline that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DolineFindFirstOrThrowArgs} args - Arguments to find a Doline
     * @example
     * // Get one Doline
     * const doline = await prisma.doline.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DolineFindFirstOrThrowArgs>(args?: SelectSubset<T, DolineFindFirstOrThrowArgs<ExtArgs>>): Prisma__DolineClient<$Result.GetResult<Prisma.$DolinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dolines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DolineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dolines
     * const dolines = await prisma.doline.findMany()
     * 
     * // Get first 10 Dolines
     * const dolines = await prisma.doline.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dolineWithIdOnly = await prisma.doline.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DolineFindManyArgs>(args?: SelectSubset<T, DolineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DolinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Doline.
     * @param {DolineCreateArgs} args - Arguments to create a Doline.
     * @example
     * // Create one Doline
     * const Doline = await prisma.doline.create({
     *   data: {
     *     // ... data to create a Doline
     *   }
     * })
     * 
     */
    create<T extends DolineCreateArgs>(args: SelectSubset<T, DolineCreateArgs<ExtArgs>>): Prisma__DolineClient<$Result.GetResult<Prisma.$DolinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dolines.
     * @param {DolineCreateManyArgs} args - Arguments to create many Dolines.
     * @example
     * // Create many Dolines
     * const doline = await prisma.doline.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DolineCreateManyArgs>(args?: SelectSubset<T, DolineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dolines and returns the data saved in the database.
     * @param {DolineCreateManyAndReturnArgs} args - Arguments to create many Dolines.
     * @example
     * // Create many Dolines
     * const doline = await prisma.doline.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dolines and only return the `id`
     * const dolineWithIdOnly = await prisma.doline.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DolineCreateManyAndReturnArgs>(args?: SelectSubset<T, DolineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DolinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Doline.
     * @param {DolineDeleteArgs} args - Arguments to delete one Doline.
     * @example
     * // Delete one Doline
     * const Doline = await prisma.doline.delete({
     *   where: {
     *     // ... filter to delete one Doline
     *   }
     * })
     * 
     */
    delete<T extends DolineDeleteArgs>(args: SelectSubset<T, DolineDeleteArgs<ExtArgs>>): Prisma__DolineClient<$Result.GetResult<Prisma.$DolinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Doline.
     * @param {DolineUpdateArgs} args - Arguments to update one Doline.
     * @example
     * // Update one Doline
     * const doline = await prisma.doline.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DolineUpdateArgs>(args: SelectSubset<T, DolineUpdateArgs<ExtArgs>>): Prisma__DolineClient<$Result.GetResult<Prisma.$DolinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dolines.
     * @param {DolineDeleteManyArgs} args - Arguments to filter Dolines to delete.
     * @example
     * // Delete a few Dolines
     * const { count } = await prisma.doline.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DolineDeleteManyArgs>(args?: SelectSubset<T, DolineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dolines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DolineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dolines
     * const doline = await prisma.doline.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DolineUpdateManyArgs>(args: SelectSubset<T, DolineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dolines and returns the data updated in the database.
     * @param {DolineUpdateManyAndReturnArgs} args - Arguments to update many Dolines.
     * @example
     * // Update many Dolines
     * const doline = await prisma.doline.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dolines and only return the `id`
     * const dolineWithIdOnly = await prisma.doline.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DolineUpdateManyAndReturnArgs>(args: SelectSubset<T, DolineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DolinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Doline.
     * @param {DolineUpsertArgs} args - Arguments to update or create a Doline.
     * @example
     * // Update or create a Doline
     * const doline = await prisma.doline.upsert({
     *   create: {
     *     // ... data to create a Doline
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doline we want to update
     *   }
     * })
     */
    upsert<T extends DolineUpsertArgs>(args: SelectSubset<T, DolineUpsertArgs<ExtArgs>>): Prisma__DolineClient<$Result.GetResult<Prisma.$DolinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dolines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DolineCountArgs} args - Arguments to filter Dolines to count.
     * @example
     * // Count the number of Dolines
     * const count = await prisma.doline.count({
     *   where: {
     *     // ... the filter for the Dolines we want to count
     *   }
     * })
    **/
    count<T extends DolineCountArgs>(
      args?: Subset<T, DolineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DolineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DolineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DolineAggregateArgs>(args: Subset<T, DolineAggregateArgs>): Prisma.PrismaPromise<GetDolineAggregateType<T>>

    /**
     * Group by Doline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DolineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DolineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DolineGroupByArgs['orderBy'] }
        : { orderBy?: DolineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DolineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDolineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Doline model
   */
  readonly fields: DolineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Doline.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DolineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    do<T extends DoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoDefaultArgs<ExtArgs>>): Prisma__DoClient<$Result.GetResult<Prisma.$DoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    site<T extends SiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SiteDefaultArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Doline model
   */
  interface DolineFieldRefs {
    readonly id: FieldRef<"Doline", 'String'>
    readonly doId: FieldRef<"Doline", 'String'>
    readonly siteId: FieldRef<"Doline", 'String'>
    readonly itemId: FieldRef<"Doline", 'String'>
    readonly qty: FieldRef<"Doline", 'Int'>
    readonly startDate: FieldRef<"Doline", 'DateTime'>
    readonly endDate: FieldRef<"Doline", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Doline findUnique
   */
  export type DolineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doline
     */
    select?: DolineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doline
     */
    omit?: DolineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DolineInclude<ExtArgs> | null
    /**
     * Filter, which Doline to fetch.
     */
    where: DolineWhereUniqueInput
  }

  /**
   * Doline findUniqueOrThrow
   */
  export type DolineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doline
     */
    select?: DolineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doline
     */
    omit?: DolineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DolineInclude<ExtArgs> | null
    /**
     * Filter, which Doline to fetch.
     */
    where: DolineWhereUniqueInput
  }

  /**
   * Doline findFirst
   */
  export type DolineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doline
     */
    select?: DolineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doline
     */
    omit?: DolineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DolineInclude<ExtArgs> | null
    /**
     * Filter, which Doline to fetch.
     */
    where?: DolineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dolines to fetch.
     */
    orderBy?: DolineOrderByWithRelationInput | DolineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dolines.
     */
    cursor?: DolineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dolines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dolines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dolines.
     */
    distinct?: DolineScalarFieldEnum | DolineScalarFieldEnum[]
  }

  /**
   * Doline findFirstOrThrow
   */
  export type DolineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doline
     */
    select?: DolineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doline
     */
    omit?: DolineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DolineInclude<ExtArgs> | null
    /**
     * Filter, which Doline to fetch.
     */
    where?: DolineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dolines to fetch.
     */
    orderBy?: DolineOrderByWithRelationInput | DolineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dolines.
     */
    cursor?: DolineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dolines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dolines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dolines.
     */
    distinct?: DolineScalarFieldEnum | DolineScalarFieldEnum[]
  }

  /**
   * Doline findMany
   */
  export type DolineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doline
     */
    select?: DolineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doline
     */
    omit?: DolineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DolineInclude<ExtArgs> | null
    /**
     * Filter, which Dolines to fetch.
     */
    where?: DolineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dolines to fetch.
     */
    orderBy?: DolineOrderByWithRelationInput | DolineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dolines.
     */
    cursor?: DolineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dolines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dolines.
     */
    skip?: number
    distinct?: DolineScalarFieldEnum | DolineScalarFieldEnum[]
  }

  /**
   * Doline create
   */
  export type DolineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doline
     */
    select?: DolineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doline
     */
    omit?: DolineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DolineInclude<ExtArgs> | null
    /**
     * The data needed to create a Doline.
     */
    data: XOR<DolineCreateInput, DolineUncheckedCreateInput>
  }

  /**
   * Doline createMany
   */
  export type DolineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dolines.
     */
    data: DolineCreateManyInput | DolineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Doline createManyAndReturn
   */
  export type DolineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doline
     */
    select?: DolineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doline
     */
    omit?: DolineOmit<ExtArgs> | null
    /**
     * The data used to create many Dolines.
     */
    data: DolineCreateManyInput | DolineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DolineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Doline update
   */
  export type DolineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doline
     */
    select?: DolineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doline
     */
    omit?: DolineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DolineInclude<ExtArgs> | null
    /**
     * The data needed to update a Doline.
     */
    data: XOR<DolineUpdateInput, DolineUncheckedUpdateInput>
    /**
     * Choose, which Doline to update.
     */
    where: DolineWhereUniqueInput
  }

  /**
   * Doline updateMany
   */
  export type DolineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dolines.
     */
    data: XOR<DolineUpdateManyMutationInput, DolineUncheckedUpdateManyInput>
    /**
     * Filter which Dolines to update
     */
    where?: DolineWhereInput
    /**
     * Limit how many Dolines to update.
     */
    limit?: number
  }

  /**
   * Doline updateManyAndReturn
   */
  export type DolineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doline
     */
    select?: DolineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doline
     */
    omit?: DolineOmit<ExtArgs> | null
    /**
     * The data used to update Dolines.
     */
    data: XOR<DolineUpdateManyMutationInput, DolineUncheckedUpdateManyInput>
    /**
     * Filter which Dolines to update
     */
    where?: DolineWhereInput
    /**
     * Limit how many Dolines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DolineIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Doline upsert
   */
  export type DolineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doline
     */
    select?: DolineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doline
     */
    omit?: DolineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DolineInclude<ExtArgs> | null
    /**
     * The filter to search for the Doline to update in case it exists.
     */
    where: DolineWhereUniqueInput
    /**
     * In case the Doline found by the `where` argument doesn't exist, create a new Doline with this data.
     */
    create: XOR<DolineCreateInput, DolineUncheckedCreateInput>
    /**
     * In case the Doline was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DolineUpdateInput, DolineUncheckedUpdateInput>
  }

  /**
   * Doline delete
   */
  export type DolineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doline
     */
    select?: DolineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doline
     */
    omit?: DolineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DolineInclude<ExtArgs> | null
    /**
     * Filter which Doline to delete.
     */
    where: DolineWhereUniqueInput
  }

  /**
   * Doline deleteMany
   */
  export type DolineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dolines to delete
     */
    where?: DolineWhereInput
    /**
     * Limit how many Dolines to delete.
     */
    limit?: number
  }

  /**
   * Doline without action
   */
  export type DolineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doline
     */
    select?: DolineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doline
     */
    omit?: DolineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DolineInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    phone: 'phone'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const ItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    uom: 'uom'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const OfficerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    account: 'account'
  };

  export type OfficerScalarFieldEnum = (typeof OfficerScalarFieldEnum)[keyof typeof OfficerScalarFieldEnum]


  export const SiteScalarFieldEnum: {
    id: 'id',
    name: 'name',
    officerId: 'officerId'
  };

  export type SiteScalarFieldEnum = (typeof SiteScalarFieldEnum)[keyof typeof SiteScalarFieldEnum]


  export const DoScalarFieldEnum: {
    id: 'id',
    number: 'number',
    customerId: 'customerId',
    date: 'date',
    project: 'project'
  };

  export type DoScalarFieldEnum = (typeof DoScalarFieldEnum)[keyof typeof DoScalarFieldEnum]


  export const DolineScalarFieldEnum: {
    id: 'id',
    doId: 'doId',
    siteId: 'siteId',
    itemId: 'itemId',
    qty: 'qty',
    startDate: 'startDate',
    endDate: 'endDate'
  };

  export type DolineScalarFieldEnum = (typeof DolineScalarFieldEnum)[keyof typeof DolineScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    name?: StringFilter<"Customer"> | string
    address?: StringFilter<"Customer"> | string
    phone?: StringFilter<"Customer"> | string
    dos?: DoListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    dos?: DoOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    address?: StringFilter<"Customer"> | string
    phone?: StringFilter<"Customer"> | string
    dos?: DoListRelationFilter
  }, "id">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    name?: StringWithAggregatesFilter<"Customer"> | string
    address?: StringWithAggregatesFilter<"Customer"> | string
    phone?: StringWithAggregatesFilter<"Customer"> | string
  }

  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    id?: StringFilter<"Item"> | string
    name?: StringFilter<"Item"> | string
    uom?: StringFilter<"Item"> | string
    dolines?: DolineListRelationFilter
  }

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    uom?: SortOrder
    dolines?: DolineOrderByRelationAggregateInput
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    name?: StringFilter<"Item"> | string
    uom?: StringFilter<"Item"> | string
    dolines?: DolineListRelationFilter
  }, "id">

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    uom?: SortOrder
    _count?: ItemCountOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    OR?: ItemScalarWhereWithAggregatesInput[]
    NOT?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Item"> | string
    name?: StringWithAggregatesFilter<"Item"> | string
    uom?: StringWithAggregatesFilter<"Item"> | string
  }

  export type OfficerWhereInput = {
    AND?: OfficerWhereInput | OfficerWhereInput[]
    OR?: OfficerWhereInput[]
    NOT?: OfficerWhereInput | OfficerWhereInput[]
    id?: StringFilter<"Officer"> | string
    name?: StringFilter<"Officer"> | string
    phone?: StringFilter<"Officer"> | string
    account?: StringFilter<"Officer"> | string
    sites?: SiteListRelationFilter
  }

  export type OfficerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    account?: SortOrder
    sites?: SiteOrderByRelationAggregateInput
  }

  export type OfficerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OfficerWhereInput | OfficerWhereInput[]
    OR?: OfficerWhereInput[]
    NOT?: OfficerWhereInput | OfficerWhereInput[]
    name?: StringFilter<"Officer"> | string
    phone?: StringFilter<"Officer"> | string
    account?: StringFilter<"Officer"> | string
    sites?: SiteListRelationFilter
  }, "id">

  export type OfficerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    account?: SortOrder
    _count?: OfficerCountOrderByAggregateInput
    _max?: OfficerMaxOrderByAggregateInput
    _min?: OfficerMinOrderByAggregateInput
  }

  export type OfficerScalarWhereWithAggregatesInput = {
    AND?: OfficerScalarWhereWithAggregatesInput | OfficerScalarWhereWithAggregatesInput[]
    OR?: OfficerScalarWhereWithAggregatesInput[]
    NOT?: OfficerScalarWhereWithAggregatesInput | OfficerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Officer"> | string
    name?: StringWithAggregatesFilter<"Officer"> | string
    phone?: StringWithAggregatesFilter<"Officer"> | string
    account?: StringWithAggregatesFilter<"Officer"> | string
  }

  export type SiteWhereInput = {
    AND?: SiteWhereInput | SiteWhereInput[]
    OR?: SiteWhereInput[]
    NOT?: SiteWhereInput | SiteWhereInput[]
    id?: StringFilter<"Site"> | string
    name?: StringFilter<"Site"> | string
    officerId?: StringNullableFilter<"Site"> | string | null
    officer?: XOR<OfficerNullableScalarRelationFilter, OfficerWhereInput> | null
    dolines?: DolineListRelationFilter
  }

  export type SiteOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    officerId?: SortOrderInput | SortOrder
    officer?: OfficerOrderByWithRelationInput
    dolines?: DolineOrderByRelationAggregateInput
  }

  export type SiteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SiteWhereInput | SiteWhereInput[]
    OR?: SiteWhereInput[]
    NOT?: SiteWhereInput | SiteWhereInput[]
    name?: StringFilter<"Site"> | string
    officerId?: StringNullableFilter<"Site"> | string | null
    officer?: XOR<OfficerNullableScalarRelationFilter, OfficerWhereInput> | null
    dolines?: DolineListRelationFilter
  }, "id">

  export type SiteOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    officerId?: SortOrderInput | SortOrder
    _count?: SiteCountOrderByAggregateInput
    _max?: SiteMaxOrderByAggregateInput
    _min?: SiteMinOrderByAggregateInput
  }

  export type SiteScalarWhereWithAggregatesInput = {
    AND?: SiteScalarWhereWithAggregatesInput | SiteScalarWhereWithAggregatesInput[]
    OR?: SiteScalarWhereWithAggregatesInput[]
    NOT?: SiteScalarWhereWithAggregatesInput | SiteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Site"> | string
    name?: StringWithAggregatesFilter<"Site"> | string
    officerId?: StringNullableWithAggregatesFilter<"Site"> | string | null
  }

  export type DoWhereInput = {
    AND?: DoWhereInput | DoWhereInput[]
    OR?: DoWhereInput[]
    NOT?: DoWhereInput | DoWhereInput[]
    id?: StringFilter<"Do"> | string
    number?: StringFilter<"Do"> | string
    customerId?: StringFilter<"Do"> | string
    date?: DateTimeFilter<"Do"> | Date | string
    project?: StringFilter<"Do"> | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    dolines?: DolineListRelationFilter
  }

  export type DoOrderByWithRelationInput = {
    id?: SortOrder
    number?: SortOrder
    customerId?: SortOrder
    date?: SortOrder
    project?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    dolines?: DolineOrderByRelationAggregateInput
  }

  export type DoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    number?: string
    AND?: DoWhereInput | DoWhereInput[]
    OR?: DoWhereInput[]
    NOT?: DoWhereInput | DoWhereInput[]
    customerId?: StringFilter<"Do"> | string
    date?: DateTimeFilter<"Do"> | Date | string
    project?: StringFilter<"Do"> | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    dolines?: DolineListRelationFilter
  }, "id" | "number">

  export type DoOrderByWithAggregationInput = {
    id?: SortOrder
    number?: SortOrder
    customerId?: SortOrder
    date?: SortOrder
    project?: SortOrder
    _count?: DoCountOrderByAggregateInput
    _max?: DoMaxOrderByAggregateInput
    _min?: DoMinOrderByAggregateInput
  }

  export type DoScalarWhereWithAggregatesInput = {
    AND?: DoScalarWhereWithAggregatesInput | DoScalarWhereWithAggregatesInput[]
    OR?: DoScalarWhereWithAggregatesInput[]
    NOT?: DoScalarWhereWithAggregatesInput | DoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Do"> | string
    number?: StringWithAggregatesFilter<"Do"> | string
    customerId?: StringWithAggregatesFilter<"Do"> | string
    date?: DateTimeWithAggregatesFilter<"Do"> | Date | string
    project?: StringWithAggregatesFilter<"Do"> | string
  }

  export type DolineWhereInput = {
    AND?: DolineWhereInput | DolineWhereInput[]
    OR?: DolineWhereInput[]
    NOT?: DolineWhereInput | DolineWhereInput[]
    id?: StringFilter<"Doline"> | string
    doId?: StringFilter<"Doline"> | string
    siteId?: StringFilter<"Doline"> | string
    itemId?: StringFilter<"Doline"> | string
    qty?: IntFilter<"Doline"> | number
    startDate?: DateTimeFilter<"Doline"> | Date | string
    endDate?: DateTimeFilter<"Doline"> | Date | string
    do?: XOR<DoScalarRelationFilter, DoWhereInput>
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }

  export type DolineOrderByWithRelationInput = {
    id?: SortOrder
    doId?: SortOrder
    siteId?: SortOrder
    itemId?: SortOrder
    qty?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    do?: DoOrderByWithRelationInput
    site?: SiteOrderByWithRelationInput
    item?: ItemOrderByWithRelationInput
  }

  export type DolineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DolineWhereInput | DolineWhereInput[]
    OR?: DolineWhereInput[]
    NOT?: DolineWhereInput | DolineWhereInput[]
    doId?: StringFilter<"Doline"> | string
    siteId?: StringFilter<"Doline"> | string
    itemId?: StringFilter<"Doline"> | string
    qty?: IntFilter<"Doline"> | number
    startDate?: DateTimeFilter<"Doline"> | Date | string
    endDate?: DateTimeFilter<"Doline"> | Date | string
    do?: XOR<DoScalarRelationFilter, DoWhereInput>
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }, "id">

  export type DolineOrderByWithAggregationInput = {
    id?: SortOrder
    doId?: SortOrder
    siteId?: SortOrder
    itemId?: SortOrder
    qty?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    _count?: DolineCountOrderByAggregateInput
    _avg?: DolineAvgOrderByAggregateInput
    _max?: DolineMaxOrderByAggregateInput
    _min?: DolineMinOrderByAggregateInput
    _sum?: DolineSumOrderByAggregateInput
  }

  export type DolineScalarWhereWithAggregatesInput = {
    AND?: DolineScalarWhereWithAggregatesInput | DolineScalarWhereWithAggregatesInput[]
    OR?: DolineScalarWhereWithAggregatesInput[]
    NOT?: DolineScalarWhereWithAggregatesInput | DolineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Doline"> | string
    doId?: StringWithAggregatesFilter<"Doline"> | string
    siteId?: StringWithAggregatesFilter<"Doline"> | string
    itemId?: StringWithAggregatesFilter<"Doline"> | string
    qty?: IntWithAggregatesFilter<"Doline"> | number
    startDate?: DateTimeWithAggregatesFilter<"Doline"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Doline"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerCreateInput = {
    id?: string
    name: string
    address: string
    phone: string
    dos?: DoCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    phone: string
    dos?: DoUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dos?: DoUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dos?: DoUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    name: string
    address: string
    phone: string
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type ItemCreateInput = {
    id?: string
    name: string
    uom: string
    dolines?: DolineCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateInput = {
    id?: string
    name: string
    uom: string
    dolines?: DolineUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    uom?: StringFieldUpdateOperationsInput | string
    dolines?: DolineUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    uom?: StringFieldUpdateOperationsInput | string
    dolines?: DolineUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemCreateManyInput = {
    id?: string
    name: string
    uom: string
  }

  export type ItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    uom?: StringFieldUpdateOperationsInput | string
  }

  export type ItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    uom?: StringFieldUpdateOperationsInput | string
  }

  export type OfficerCreateInput = {
    id?: string
    name: string
    phone: string
    account: string
    sites?: SiteCreateNestedManyWithoutOfficerInput
  }

  export type OfficerUncheckedCreateInput = {
    id?: string
    name: string
    phone: string
    account: string
    sites?: SiteUncheckedCreateNestedManyWithoutOfficerInput
  }

  export type OfficerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
    sites?: SiteUpdateManyWithoutOfficerNestedInput
  }

  export type OfficerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
    sites?: SiteUncheckedUpdateManyWithoutOfficerNestedInput
  }

  export type OfficerCreateManyInput = {
    id?: string
    name: string
    phone: string
    account: string
  }

  export type OfficerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
  }

  export type OfficerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
  }

  export type SiteCreateInput = {
    id?: string
    name: string
    officer?: OfficerCreateNestedOneWithoutSitesInput
    dolines?: DolineCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateInput = {
    id?: string
    name: string
    officerId?: string | null
    dolines?: DolineUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    officer?: OfficerUpdateOneWithoutSitesNestedInput
    dolines?: DolineUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    officerId?: NullableStringFieldUpdateOperationsInput | string | null
    dolines?: DolineUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type SiteCreateManyInput = {
    id?: string
    name: string
    officerId?: string | null
  }

  export type SiteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SiteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    officerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DoCreateInput = {
    id?: string
    number: string
    date: Date | string
    project: string
    customer: CustomerCreateNestedOneWithoutDosInput
    dolines?: DolineCreateNestedManyWithoutDoInput
  }

  export type DoUncheckedCreateInput = {
    id?: string
    number: string
    customerId: string
    date: Date | string
    project: string
    dolines?: DolineUncheckedCreateNestedManyWithoutDoInput
  }

  export type DoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: StringFieldUpdateOperationsInput | string
    customer?: CustomerUpdateOneRequiredWithoutDosNestedInput
    dolines?: DolineUpdateManyWithoutDoNestedInput
  }

  export type DoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: StringFieldUpdateOperationsInput | string
    dolines?: DolineUncheckedUpdateManyWithoutDoNestedInput
  }

  export type DoCreateManyInput = {
    id?: string
    number: string
    customerId: string
    date: Date | string
    project: string
  }

  export type DoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: StringFieldUpdateOperationsInput | string
  }

  export type DoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: StringFieldUpdateOperationsInput | string
  }

  export type DolineCreateInput = {
    id?: string
    qty: number
    startDate: Date | string
    endDate: Date | string
    do: DoCreateNestedOneWithoutDolinesInput
    site: SiteCreateNestedOneWithoutDolinesInput
    item: ItemCreateNestedOneWithoutDolinesInput
  }

  export type DolineUncheckedCreateInput = {
    id?: string
    doId: string
    siteId: string
    itemId: string
    qty: number
    startDate: Date | string
    endDate: Date | string
  }

  export type DolineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    do?: DoUpdateOneRequiredWithoutDolinesNestedInput
    site?: SiteUpdateOneRequiredWithoutDolinesNestedInput
    item?: ItemUpdateOneRequiredWithoutDolinesNestedInput
  }

  export type DolineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    doId?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DolineCreateManyInput = {
    id?: string
    doId: string
    siteId: string
    itemId: string
    qty: number
    startDate: Date | string
    endDate: Date | string
  }

  export type DolineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DolineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    doId?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DoListRelationFilter = {
    every?: DoWhereInput
    some?: DoWhereInput
    none?: DoWhereInput
  }

  export type DoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
  }

  export type DolineListRelationFilter = {
    every?: DolineWhereInput
    some?: DolineWhereInput
    none?: DolineWhereInput
  }

  export type DolineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    uom?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    uom?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    uom?: SortOrder
  }

  export type SiteListRelationFilter = {
    every?: SiteWhereInput
    some?: SiteWhereInput
    none?: SiteWhereInput
  }

  export type SiteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OfficerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    account?: SortOrder
  }

  export type OfficerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    account?: SortOrder
  }

  export type OfficerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    account?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type OfficerNullableScalarRelationFilter = {
    is?: OfficerWhereInput | null
    isNot?: OfficerWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SiteCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    officerId?: SortOrder
  }

  export type SiteMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    officerId?: SortOrder
  }

  export type SiteMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    officerId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type DoCountOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    customerId?: SortOrder
    date?: SortOrder
    project?: SortOrder
  }

  export type DoMaxOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    customerId?: SortOrder
    date?: SortOrder
    project?: SortOrder
  }

  export type DoMinOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    customerId?: SortOrder
    date?: SortOrder
    project?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DoScalarRelationFilter = {
    is?: DoWhereInput
    isNot?: DoWhereInput
  }

  export type SiteScalarRelationFilter = {
    is?: SiteWhereInput
    isNot?: SiteWhereInput
  }

  export type ItemScalarRelationFilter = {
    is?: ItemWhereInput
    isNot?: ItemWhereInput
  }

  export type DolineCountOrderByAggregateInput = {
    id?: SortOrder
    doId?: SortOrder
    siteId?: SortOrder
    itemId?: SortOrder
    qty?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type DolineAvgOrderByAggregateInput = {
    qty?: SortOrder
  }

  export type DolineMaxOrderByAggregateInput = {
    id?: SortOrder
    doId?: SortOrder
    siteId?: SortOrder
    itemId?: SortOrder
    qty?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type DolineMinOrderByAggregateInput = {
    id?: SortOrder
    doId?: SortOrder
    siteId?: SortOrder
    itemId?: SortOrder
    qty?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type DolineSumOrderByAggregateInput = {
    qty?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DoCreateNestedManyWithoutCustomerInput = {
    create?: XOR<DoCreateWithoutCustomerInput, DoUncheckedCreateWithoutCustomerInput> | DoCreateWithoutCustomerInput[] | DoUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: DoCreateOrConnectWithoutCustomerInput | DoCreateOrConnectWithoutCustomerInput[]
    createMany?: DoCreateManyCustomerInputEnvelope
    connect?: DoWhereUniqueInput | DoWhereUniqueInput[]
  }

  export type DoUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<DoCreateWithoutCustomerInput, DoUncheckedCreateWithoutCustomerInput> | DoCreateWithoutCustomerInput[] | DoUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: DoCreateOrConnectWithoutCustomerInput | DoCreateOrConnectWithoutCustomerInput[]
    createMany?: DoCreateManyCustomerInputEnvelope
    connect?: DoWhereUniqueInput | DoWhereUniqueInput[]
  }

  export type DoUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<DoCreateWithoutCustomerInput, DoUncheckedCreateWithoutCustomerInput> | DoCreateWithoutCustomerInput[] | DoUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: DoCreateOrConnectWithoutCustomerInput | DoCreateOrConnectWithoutCustomerInput[]
    upsert?: DoUpsertWithWhereUniqueWithoutCustomerInput | DoUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: DoCreateManyCustomerInputEnvelope
    set?: DoWhereUniqueInput | DoWhereUniqueInput[]
    disconnect?: DoWhereUniqueInput | DoWhereUniqueInput[]
    delete?: DoWhereUniqueInput | DoWhereUniqueInput[]
    connect?: DoWhereUniqueInput | DoWhereUniqueInput[]
    update?: DoUpdateWithWhereUniqueWithoutCustomerInput | DoUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: DoUpdateManyWithWhereWithoutCustomerInput | DoUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: DoScalarWhereInput | DoScalarWhereInput[]
  }

  export type DoUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<DoCreateWithoutCustomerInput, DoUncheckedCreateWithoutCustomerInput> | DoCreateWithoutCustomerInput[] | DoUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: DoCreateOrConnectWithoutCustomerInput | DoCreateOrConnectWithoutCustomerInput[]
    upsert?: DoUpsertWithWhereUniqueWithoutCustomerInput | DoUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: DoCreateManyCustomerInputEnvelope
    set?: DoWhereUniqueInput | DoWhereUniqueInput[]
    disconnect?: DoWhereUniqueInput | DoWhereUniqueInput[]
    delete?: DoWhereUniqueInput | DoWhereUniqueInput[]
    connect?: DoWhereUniqueInput | DoWhereUniqueInput[]
    update?: DoUpdateWithWhereUniqueWithoutCustomerInput | DoUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: DoUpdateManyWithWhereWithoutCustomerInput | DoUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: DoScalarWhereInput | DoScalarWhereInput[]
  }

  export type DolineCreateNestedManyWithoutItemInput = {
    create?: XOR<DolineCreateWithoutItemInput, DolineUncheckedCreateWithoutItemInput> | DolineCreateWithoutItemInput[] | DolineUncheckedCreateWithoutItemInput[]
    connectOrCreate?: DolineCreateOrConnectWithoutItemInput | DolineCreateOrConnectWithoutItemInput[]
    createMany?: DolineCreateManyItemInputEnvelope
    connect?: DolineWhereUniqueInput | DolineWhereUniqueInput[]
  }

  export type DolineUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<DolineCreateWithoutItemInput, DolineUncheckedCreateWithoutItemInput> | DolineCreateWithoutItemInput[] | DolineUncheckedCreateWithoutItemInput[]
    connectOrCreate?: DolineCreateOrConnectWithoutItemInput | DolineCreateOrConnectWithoutItemInput[]
    createMany?: DolineCreateManyItemInputEnvelope
    connect?: DolineWhereUniqueInput | DolineWhereUniqueInput[]
  }

  export type DolineUpdateManyWithoutItemNestedInput = {
    create?: XOR<DolineCreateWithoutItemInput, DolineUncheckedCreateWithoutItemInput> | DolineCreateWithoutItemInput[] | DolineUncheckedCreateWithoutItemInput[]
    connectOrCreate?: DolineCreateOrConnectWithoutItemInput | DolineCreateOrConnectWithoutItemInput[]
    upsert?: DolineUpsertWithWhereUniqueWithoutItemInput | DolineUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: DolineCreateManyItemInputEnvelope
    set?: DolineWhereUniqueInput | DolineWhereUniqueInput[]
    disconnect?: DolineWhereUniqueInput | DolineWhereUniqueInput[]
    delete?: DolineWhereUniqueInput | DolineWhereUniqueInput[]
    connect?: DolineWhereUniqueInput | DolineWhereUniqueInput[]
    update?: DolineUpdateWithWhereUniqueWithoutItemInput | DolineUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: DolineUpdateManyWithWhereWithoutItemInput | DolineUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: DolineScalarWhereInput | DolineScalarWhereInput[]
  }

  export type DolineUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<DolineCreateWithoutItemInput, DolineUncheckedCreateWithoutItemInput> | DolineCreateWithoutItemInput[] | DolineUncheckedCreateWithoutItemInput[]
    connectOrCreate?: DolineCreateOrConnectWithoutItemInput | DolineCreateOrConnectWithoutItemInput[]
    upsert?: DolineUpsertWithWhereUniqueWithoutItemInput | DolineUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: DolineCreateManyItemInputEnvelope
    set?: DolineWhereUniqueInput | DolineWhereUniqueInput[]
    disconnect?: DolineWhereUniqueInput | DolineWhereUniqueInput[]
    delete?: DolineWhereUniqueInput | DolineWhereUniqueInput[]
    connect?: DolineWhereUniqueInput | DolineWhereUniqueInput[]
    update?: DolineUpdateWithWhereUniqueWithoutItemInput | DolineUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: DolineUpdateManyWithWhereWithoutItemInput | DolineUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: DolineScalarWhereInput | DolineScalarWhereInput[]
  }

  export type SiteCreateNestedManyWithoutOfficerInput = {
    create?: XOR<SiteCreateWithoutOfficerInput, SiteUncheckedCreateWithoutOfficerInput> | SiteCreateWithoutOfficerInput[] | SiteUncheckedCreateWithoutOfficerInput[]
    connectOrCreate?: SiteCreateOrConnectWithoutOfficerInput | SiteCreateOrConnectWithoutOfficerInput[]
    createMany?: SiteCreateManyOfficerInputEnvelope
    connect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
  }

  export type SiteUncheckedCreateNestedManyWithoutOfficerInput = {
    create?: XOR<SiteCreateWithoutOfficerInput, SiteUncheckedCreateWithoutOfficerInput> | SiteCreateWithoutOfficerInput[] | SiteUncheckedCreateWithoutOfficerInput[]
    connectOrCreate?: SiteCreateOrConnectWithoutOfficerInput | SiteCreateOrConnectWithoutOfficerInput[]
    createMany?: SiteCreateManyOfficerInputEnvelope
    connect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
  }

  export type SiteUpdateManyWithoutOfficerNestedInput = {
    create?: XOR<SiteCreateWithoutOfficerInput, SiteUncheckedCreateWithoutOfficerInput> | SiteCreateWithoutOfficerInput[] | SiteUncheckedCreateWithoutOfficerInput[]
    connectOrCreate?: SiteCreateOrConnectWithoutOfficerInput | SiteCreateOrConnectWithoutOfficerInput[]
    upsert?: SiteUpsertWithWhereUniqueWithoutOfficerInput | SiteUpsertWithWhereUniqueWithoutOfficerInput[]
    createMany?: SiteCreateManyOfficerInputEnvelope
    set?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    disconnect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    delete?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    connect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    update?: SiteUpdateWithWhereUniqueWithoutOfficerInput | SiteUpdateWithWhereUniqueWithoutOfficerInput[]
    updateMany?: SiteUpdateManyWithWhereWithoutOfficerInput | SiteUpdateManyWithWhereWithoutOfficerInput[]
    deleteMany?: SiteScalarWhereInput | SiteScalarWhereInput[]
  }

  export type SiteUncheckedUpdateManyWithoutOfficerNestedInput = {
    create?: XOR<SiteCreateWithoutOfficerInput, SiteUncheckedCreateWithoutOfficerInput> | SiteCreateWithoutOfficerInput[] | SiteUncheckedCreateWithoutOfficerInput[]
    connectOrCreate?: SiteCreateOrConnectWithoutOfficerInput | SiteCreateOrConnectWithoutOfficerInput[]
    upsert?: SiteUpsertWithWhereUniqueWithoutOfficerInput | SiteUpsertWithWhereUniqueWithoutOfficerInput[]
    createMany?: SiteCreateManyOfficerInputEnvelope
    set?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    disconnect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    delete?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    connect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    update?: SiteUpdateWithWhereUniqueWithoutOfficerInput | SiteUpdateWithWhereUniqueWithoutOfficerInput[]
    updateMany?: SiteUpdateManyWithWhereWithoutOfficerInput | SiteUpdateManyWithWhereWithoutOfficerInput[]
    deleteMany?: SiteScalarWhereInput | SiteScalarWhereInput[]
  }

  export type OfficerCreateNestedOneWithoutSitesInput = {
    create?: XOR<OfficerCreateWithoutSitesInput, OfficerUncheckedCreateWithoutSitesInput>
    connectOrCreate?: OfficerCreateOrConnectWithoutSitesInput
    connect?: OfficerWhereUniqueInput
  }

  export type DolineCreateNestedManyWithoutSiteInput = {
    create?: XOR<DolineCreateWithoutSiteInput, DolineUncheckedCreateWithoutSiteInput> | DolineCreateWithoutSiteInput[] | DolineUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: DolineCreateOrConnectWithoutSiteInput | DolineCreateOrConnectWithoutSiteInput[]
    createMany?: DolineCreateManySiteInputEnvelope
    connect?: DolineWhereUniqueInput | DolineWhereUniqueInput[]
  }

  export type DolineUncheckedCreateNestedManyWithoutSiteInput = {
    create?: XOR<DolineCreateWithoutSiteInput, DolineUncheckedCreateWithoutSiteInput> | DolineCreateWithoutSiteInput[] | DolineUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: DolineCreateOrConnectWithoutSiteInput | DolineCreateOrConnectWithoutSiteInput[]
    createMany?: DolineCreateManySiteInputEnvelope
    connect?: DolineWhereUniqueInput | DolineWhereUniqueInput[]
  }

  export type OfficerUpdateOneWithoutSitesNestedInput = {
    create?: XOR<OfficerCreateWithoutSitesInput, OfficerUncheckedCreateWithoutSitesInput>
    connectOrCreate?: OfficerCreateOrConnectWithoutSitesInput
    upsert?: OfficerUpsertWithoutSitesInput
    disconnect?: OfficerWhereInput | boolean
    delete?: OfficerWhereInput | boolean
    connect?: OfficerWhereUniqueInput
    update?: XOR<XOR<OfficerUpdateToOneWithWhereWithoutSitesInput, OfficerUpdateWithoutSitesInput>, OfficerUncheckedUpdateWithoutSitesInput>
  }

  export type DolineUpdateManyWithoutSiteNestedInput = {
    create?: XOR<DolineCreateWithoutSiteInput, DolineUncheckedCreateWithoutSiteInput> | DolineCreateWithoutSiteInput[] | DolineUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: DolineCreateOrConnectWithoutSiteInput | DolineCreateOrConnectWithoutSiteInput[]
    upsert?: DolineUpsertWithWhereUniqueWithoutSiteInput | DolineUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: DolineCreateManySiteInputEnvelope
    set?: DolineWhereUniqueInput | DolineWhereUniqueInput[]
    disconnect?: DolineWhereUniqueInput | DolineWhereUniqueInput[]
    delete?: DolineWhereUniqueInput | DolineWhereUniqueInput[]
    connect?: DolineWhereUniqueInput | DolineWhereUniqueInput[]
    update?: DolineUpdateWithWhereUniqueWithoutSiteInput | DolineUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: DolineUpdateManyWithWhereWithoutSiteInput | DolineUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: DolineScalarWhereInput | DolineScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DolineUncheckedUpdateManyWithoutSiteNestedInput = {
    create?: XOR<DolineCreateWithoutSiteInput, DolineUncheckedCreateWithoutSiteInput> | DolineCreateWithoutSiteInput[] | DolineUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: DolineCreateOrConnectWithoutSiteInput | DolineCreateOrConnectWithoutSiteInput[]
    upsert?: DolineUpsertWithWhereUniqueWithoutSiteInput | DolineUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: DolineCreateManySiteInputEnvelope
    set?: DolineWhereUniqueInput | DolineWhereUniqueInput[]
    disconnect?: DolineWhereUniqueInput | DolineWhereUniqueInput[]
    delete?: DolineWhereUniqueInput | DolineWhereUniqueInput[]
    connect?: DolineWhereUniqueInput | DolineWhereUniqueInput[]
    update?: DolineUpdateWithWhereUniqueWithoutSiteInput | DolineUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: DolineUpdateManyWithWhereWithoutSiteInput | DolineUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: DolineScalarWhereInput | DolineScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutDosInput = {
    create?: XOR<CustomerCreateWithoutDosInput, CustomerUncheckedCreateWithoutDosInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutDosInput
    connect?: CustomerWhereUniqueInput
  }

  export type DolineCreateNestedManyWithoutDoInput = {
    create?: XOR<DolineCreateWithoutDoInput, DolineUncheckedCreateWithoutDoInput> | DolineCreateWithoutDoInput[] | DolineUncheckedCreateWithoutDoInput[]
    connectOrCreate?: DolineCreateOrConnectWithoutDoInput | DolineCreateOrConnectWithoutDoInput[]
    createMany?: DolineCreateManyDoInputEnvelope
    connect?: DolineWhereUniqueInput | DolineWhereUniqueInput[]
  }

  export type DolineUncheckedCreateNestedManyWithoutDoInput = {
    create?: XOR<DolineCreateWithoutDoInput, DolineUncheckedCreateWithoutDoInput> | DolineCreateWithoutDoInput[] | DolineUncheckedCreateWithoutDoInput[]
    connectOrCreate?: DolineCreateOrConnectWithoutDoInput | DolineCreateOrConnectWithoutDoInput[]
    createMany?: DolineCreateManyDoInputEnvelope
    connect?: DolineWhereUniqueInput | DolineWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CustomerUpdateOneRequiredWithoutDosNestedInput = {
    create?: XOR<CustomerCreateWithoutDosInput, CustomerUncheckedCreateWithoutDosInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutDosInput
    upsert?: CustomerUpsertWithoutDosInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutDosInput, CustomerUpdateWithoutDosInput>, CustomerUncheckedUpdateWithoutDosInput>
  }

  export type DolineUpdateManyWithoutDoNestedInput = {
    create?: XOR<DolineCreateWithoutDoInput, DolineUncheckedCreateWithoutDoInput> | DolineCreateWithoutDoInput[] | DolineUncheckedCreateWithoutDoInput[]
    connectOrCreate?: DolineCreateOrConnectWithoutDoInput | DolineCreateOrConnectWithoutDoInput[]
    upsert?: DolineUpsertWithWhereUniqueWithoutDoInput | DolineUpsertWithWhereUniqueWithoutDoInput[]
    createMany?: DolineCreateManyDoInputEnvelope
    set?: DolineWhereUniqueInput | DolineWhereUniqueInput[]
    disconnect?: DolineWhereUniqueInput | DolineWhereUniqueInput[]
    delete?: DolineWhereUniqueInput | DolineWhereUniqueInput[]
    connect?: DolineWhereUniqueInput | DolineWhereUniqueInput[]
    update?: DolineUpdateWithWhereUniqueWithoutDoInput | DolineUpdateWithWhereUniqueWithoutDoInput[]
    updateMany?: DolineUpdateManyWithWhereWithoutDoInput | DolineUpdateManyWithWhereWithoutDoInput[]
    deleteMany?: DolineScalarWhereInput | DolineScalarWhereInput[]
  }

  export type DolineUncheckedUpdateManyWithoutDoNestedInput = {
    create?: XOR<DolineCreateWithoutDoInput, DolineUncheckedCreateWithoutDoInput> | DolineCreateWithoutDoInput[] | DolineUncheckedCreateWithoutDoInput[]
    connectOrCreate?: DolineCreateOrConnectWithoutDoInput | DolineCreateOrConnectWithoutDoInput[]
    upsert?: DolineUpsertWithWhereUniqueWithoutDoInput | DolineUpsertWithWhereUniqueWithoutDoInput[]
    createMany?: DolineCreateManyDoInputEnvelope
    set?: DolineWhereUniqueInput | DolineWhereUniqueInput[]
    disconnect?: DolineWhereUniqueInput | DolineWhereUniqueInput[]
    delete?: DolineWhereUniqueInput | DolineWhereUniqueInput[]
    connect?: DolineWhereUniqueInput | DolineWhereUniqueInput[]
    update?: DolineUpdateWithWhereUniqueWithoutDoInput | DolineUpdateWithWhereUniqueWithoutDoInput[]
    updateMany?: DolineUpdateManyWithWhereWithoutDoInput | DolineUpdateManyWithWhereWithoutDoInput[]
    deleteMany?: DolineScalarWhereInput | DolineScalarWhereInput[]
  }

  export type DoCreateNestedOneWithoutDolinesInput = {
    create?: XOR<DoCreateWithoutDolinesInput, DoUncheckedCreateWithoutDolinesInput>
    connectOrCreate?: DoCreateOrConnectWithoutDolinesInput
    connect?: DoWhereUniqueInput
  }

  export type SiteCreateNestedOneWithoutDolinesInput = {
    create?: XOR<SiteCreateWithoutDolinesInput, SiteUncheckedCreateWithoutDolinesInput>
    connectOrCreate?: SiteCreateOrConnectWithoutDolinesInput
    connect?: SiteWhereUniqueInput
  }

  export type ItemCreateNestedOneWithoutDolinesInput = {
    create?: XOR<ItemCreateWithoutDolinesInput, ItemUncheckedCreateWithoutDolinesInput>
    connectOrCreate?: ItemCreateOrConnectWithoutDolinesInput
    connect?: ItemWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DoUpdateOneRequiredWithoutDolinesNestedInput = {
    create?: XOR<DoCreateWithoutDolinesInput, DoUncheckedCreateWithoutDolinesInput>
    connectOrCreate?: DoCreateOrConnectWithoutDolinesInput
    upsert?: DoUpsertWithoutDolinesInput
    connect?: DoWhereUniqueInput
    update?: XOR<XOR<DoUpdateToOneWithWhereWithoutDolinesInput, DoUpdateWithoutDolinesInput>, DoUncheckedUpdateWithoutDolinesInput>
  }

  export type SiteUpdateOneRequiredWithoutDolinesNestedInput = {
    create?: XOR<SiteCreateWithoutDolinesInput, SiteUncheckedCreateWithoutDolinesInput>
    connectOrCreate?: SiteCreateOrConnectWithoutDolinesInput
    upsert?: SiteUpsertWithoutDolinesInput
    connect?: SiteWhereUniqueInput
    update?: XOR<XOR<SiteUpdateToOneWithWhereWithoutDolinesInput, SiteUpdateWithoutDolinesInput>, SiteUncheckedUpdateWithoutDolinesInput>
  }

  export type ItemUpdateOneRequiredWithoutDolinesNestedInput = {
    create?: XOR<ItemCreateWithoutDolinesInput, ItemUncheckedCreateWithoutDolinesInput>
    connectOrCreate?: ItemCreateOrConnectWithoutDolinesInput
    upsert?: ItemUpsertWithoutDolinesInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutDolinesInput, ItemUpdateWithoutDolinesInput>, ItemUncheckedUpdateWithoutDolinesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DoCreateWithoutCustomerInput = {
    id?: string
    number: string
    date: Date | string
    project: string
    dolines?: DolineCreateNestedManyWithoutDoInput
  }

  export type DoUncheckedCreateWithoutCustomerInput = {
    id?: string
    number: string
    date: Date | string
    project: string
    dolines?: DolineUncheckedCreateNestedManyWithoutDoInput
  }

  export type DoCreateOrConnectWithoutCustomerInput = {
    where: DoWhereUniqueInput
    create: XOR<DoCreateWithoutCustomerInput, DoUncheckedCreateWithoutCustomerInput>
  }

  export type DoCreateManyCustomerInputEnvelope = {
    data: DoCreateManyCustomerInput | DoCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type DoUpsertWithWhereUniqueWithoutCustomerInput = {
    where: DoWhereUniqueInput
    update: XOR<DoUpdateWithoutCustomerInput, DoUncheckedUpdateWithoutCustomerInput>
    create: XOR<DoCreateWithoutCustomerInput, DoUncheckedCreateWithoutCustomerInput>
  }

  export type DoUpdateWithWhereUniqueWithoutCustomerInput = {
    where: DoWhereUniqueInput
    data: XOR<DoUpdateWithoutCustomerInput, DoUncheckedUpdateWithoutCustomerInput>
  }

  export type DoUpdateManyWithWhereWithoutCustomerInput = {
    where: DoScalarWhereInput
    data: XOR<DoUpdateManyMutationInput, DoUncheckedUpdateManyWithoutCustomerInput>
  }

  export type DoScalarWhereInput = {
    AND?: DoScalarWhereInput | DoScalarWhereInput[]
    OR?: DoScalarWhereInput[]
    NOT?: DoScalarWhereInput | DoScalarWhereInput[]
    id?: StringFilter<"Do"> | string
    number?: StringFilter<"Do"> | string
    customerId?: StringFilter<"Do"> | string
    date?: DateTimeFilter<"Do"> | Date | string
    project?: StringFilter<"Do"> | string
  }

  export type DolineCreateWithoutItemInput = {
    id?: string
    qty: number
    startDate: Date | string
    endDate: Date | string
    do: DoCreateNestedOneWithoutDolinesInput
    site: SiteCreateNestedOneWithoutDolinesInput
  }

  export type DolineUncheckedCreateWithoutItemInput = {
    id?: string
    doId: string
    siteId: string
    qty: number
    startDate: Date | string
    endDate: Date | string
  }

  export type DolineCreateOrConnectWithoutItemInput = {
    where: DolineWhereUniqueInput
    create: XOR<DolineCreateWithoutItemInput, DolineUncheckedCreateWithoutItemInput>
  }

  export type DolineCreateManyItemInputEnvelope = {
    data: DolineCreateManyItemInput | DolineCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type DolineUpsertWithWhereUniqueWithoutItemInput = {
    where: DolineWhereUniqueInput
    update: XOR<DolineUpdateWithoutItemInput, DolineUncheckedUpdateWithoutItemInput>
    create: XOR<DolineCreateWithoutItemInput, DolineUncheckedCreateWithoutItemInput>
  }

  export type DolineUpdateWithWhereUniqueWithoutItemInput = {
    where: DolineWhereUniqueInput
    data: XOR<DolineUpdateWithoutItemInput, DolineUncheckedUpdateWithoutItemInput>
  }

  export type DolineUpdateManyWithWhereWithoutItemInput = {
    where: DolineScalarWhereInput
    data: XOR<DolineUpdateManyMutationInput, DolineUncheckedUpdateManyWithoutItemInput>
  }

  export type DolineScalarWhereInput = {
    AND?: DolineScalarWhereInput | DolineScalarWhereInput[]
    OR?: DolineScalarWhereInput[]
    NOT?: DolineScalarWhereInput | DolineScalarWhereInput[]
    id?: StringFilter<"Doline"> | string
    doId?: StringFilter<"Doline"> | string
    siteId?: StringFilter<"Doline"> | string
    itemId?: StringFilter<"Doline"> | string
    qty?: IntFilter<"Doline"> | number
    startDate?: DateTimeFilter<"Doline"> | Date | string
    endDate?: DateTimeFilter<"Doline"> | Date | string
  }

  export type SiteCreateWithoutOfficerInput = {
    id?: string
    name: string
    dolines?: DolineCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateWithoutOfficerInput = {
    id?: string
    name: string
    dolines?: DolineUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteCreateOrConnectWithoutOfficerInput = {
    where: SiteWhereUniqueInput
    create: XOR<SiteCreateWithoutOfficerInput, SiteUncheckedCreateWithoutOfficerInput>
  }

  export type SiteCreateManyOfficerInputEnvelope = {
    data: SiteCreateManyOfficerInput | SiteCreateManyOfficerInput[]
    skipDuplicates?: boolean
  }

  export type SiteUpsertWithWhereUniqueWithoutOfficerInput = {
    where: SiteWhereUniqueInput
    update: XOR<SiteUpdateWithoutOfficerInput, SiteUncheckedUpdateWithoutOfficerInput>
    create: XOR<SiteCreateWithoutOfficerInput, SiteUncheckedCreateWithoutOfficerInput>
  }

  export type SiteUpdateWithWhereUniqueWithoutOfficerInput = {
    where: SiteWhereUniqueInput
    data: XOR<SiteUpdateWithoutOfficerInput, SiteUncheckedUpdateWithoutOfficerInput>
  }

  export type SiteUpdateManyWithWhereWithoutOfficerInput = {
    where: SiteScalarWhereInput
    data: XOR<SiteUpdateManyMutationInput, SiteUncheckedUpdateManyWithoutOfficerInput>
  }

  export type SiteScalarWhereInput = {
    AND?: SiteScalarWhereInput | SiteScalarWhereInput[]
    OR?: SiteScalarWhereInput[]
    NOT?: SiteScalarWhereInput | SiteScalarWhereInput[]
    id?: StringFilter<"Site"> | string
    name?: StringFilter<"Site"> | string
    officerId?: StringNullableFilter<"Site"> | string | null
  }

  export type OfficerCreateWithoutSitesInput = {
    id?: string
    name: string
    phone: string
    account: string
  }

  export type OfficerUncheckedCreateWithoutSitesInput = {
    id?: string
    name: string
    phone: string
    account: string
  }

  export type OfficerCreateOrConnectWithoutSitesInput = {
    where: OfficerWhereUniqueInput
    create: XOR<OfficerCreateWithoutSitesInput, OfficerUncheckedCreateWithoutSitesInput>
  }

  export type DolineCreateWithoutSiteInput = {
    id?: string
    qty: number
    startDate: Date | string
    endDate: Date | string
    do: DoCreateNestedOneWithoutDolinesInput
    item: ItemCreateNestedOneWithoutDolinesInput
  }

  export type DolineUncheckedCreateWithoutSiteInput = {
    id?: string
    doId: string
    itemId: string
    qty: number
    startDate: Date | string
    endDate: Date | string
  }

  export type DolineCreateOrConnectWithoutSiteInput = {
    where: DolineWhereUniqueInput
    create: XOR<DolineCreateWithoutSiteInput, DolineUncheckedCreateWithoutSiteInput>
  }

  export type DolineCreateManySiteInputEnvelope = {
    data: DolineCreateManySiteInput | DolineCreateManySiteInput[]
    skipDuplicates?: boolean
  }

  export type OfficerUpsertWithoutSitesInput = {
    update: XOR<OfficerUpdateWithoutSitesInput, OfficerUncheckedUpdateWithoutSitesInput>
    create: XOR<OfficerCreateWithoutSitesInput, OfficerUncheckedCreateWithoutSitesInput>
    where?: OfficerWhereInput
  }

  export type OfficerUpdateToOneWithWhereWithoutSitesInput = {
    where?: OfficerWhereInput
    data: XOR<OfficerUpdateWithoutSitesInput, OfficerUncheckedUpdateWithoutSitesInput>
  }

  export type OfficerUpdateWithoutSitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
  }

  export type OfficerUncheckedUpdateWithoutSitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    account?: StringFieldUpdateOperationsInput | string
  }

  export type DolineUpsertWithWhereUniqueWithoutSiteInput = {
    where: DolineWhereUniqueInput
    update: XOR<DolineUpdateWithoutSiteInput, DolineUncheckedUpdateWithoutSiteInput>
    create: XOR<DolineCreateWithoutSiteInput, DolineUncheckedCreateWithoutSiteInput>
  }

  export type DolineUpdateWithWhereUniqueWithoutSiteInput = {
    where: DolineWhereUniqueInput
    data: XOR<DolineUpdateWithoutSiteInput, DolineUncheckedUpdateWithoutSiteInput>
  }

  export type DolineUpdateManyWithWhereWithoutSiteInput = {
    where: DolineScalarWhereInput
    data: XOR<DolineUpdateManyMutationInput, DolineUncheckedUpdateManyWithoutSiteInput>
  }

  export type CustomerCreateWithoutDosInput = {
    id?: string
    name: string
    address: string
    phone: string
  }

  export type CustomerUncheckedCreateWithoutDosInput = {
    id?: string
    name: string
    address: string
    phone: string
  }

  export type CustomerCreateOrConnectWithoutDosInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutDosInput, CustomerUncheckedCreateWithoutDosInput>
  }

  export type DolineCreateWithoutDoInput = {
    id?: string
    qty: number
    startDate: Date | string
    endDate: Date | string
    site: SiteCreateNestedOneWithoutDolinesInput
    item: ItemCreateNestedOneWithoutDolinesInput
  }

  export type DolineUncheckedCreateWithoutDoInput = {
    id?: string
    siteId: string
    itemId: string
    qty: number
    startDate: Date | string
    endDate: Date | string
  }

  export type DolineCreateOrConnectWithoutDoInput = {
    where: DolineWhereUniqueInput
    create: XOR<DolineCreateWithoutDoInput, DolineUncheckedCreateWithoutDoInput>
  }

  export type DolineCreateManyDoInputEnvelope = {
    data: DolineCreateManyDoInput | DolineCreateManyDoInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutDosInput = {
    update: XOR<CustomerUpdateWithoutDosInput, CustomerUncheckedUpdateWithoutDosInput>
    create: XOR<CustomerCreateWithoutDosInput, CustomerUncheckedCreateWithoutDosInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutDosInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutDosInput, CustomerUncheckedUpdateWithoutDosInput>
  }

  export type CustomerUpdateWithoutDosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerUncheckedUpdateWithoutDosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type DolineUpsertWithWhereUniqueWithoutDoInput = {
    where: DolineWhereUniqueInput
    update: XOR<DolineUpdateWithoutDoInput, DolineUncheckedUpdateWithoutDoInput>
    create: XOR<DolineCreateWithoutDoInput, DolineUncheckedCreateWithoutDoInput>
  }

  export type DolineUpdateWithWhereUniqueWithoutDoInput = {
    where: DolineWhereUniqueInput
    data: XOR<DolineUpdateWithoutDoInput, DolineUncheckedUpdateWithoutDoInput>
  }

  export type DolineUpdateManyWithWhereWithoutDoInput = {
    where: DolineScalarWhereInput
    data: XOR<DolineUpdateManyMutationInput, DolineUncheckedUpdateManyWithoutDoInput>
  }

  export type DoCreateWithoutDolinesInput = {
    id?: string
    number: string
    date: Date | string
    project: string
    customer: CustomerCreateNestedOneWithoutDosInput
  }

  export type DoUncheckedCreateWithoutDolinesInput = {
    id?: string
    number: string
    customerId: string
    date: Date | string
    project: string
  }

  export type DoCreateOrConnectWithoutDolinesInput = {
    where: DoWhereUniqueInput
    create: XOR<DoCreateWithoutDolinesInput, DoUncheckedCreateWithoutDolinesInput>
  }

  export type SiteCreateWithoutDolinesInput = {
    id?: string
    name: string
    officer?: OfficerCreateNestedOneWithoutSitesInput
  }

  export type SiteUncheckedCreateWithoutDolinesInput = {
    id?: string
    name: string
    officerId?: string | null
  }

  export type SiteCreateOrConnectWithoutDolinesInput = {
    where: SiteWhereUniqueInput
    create: XOR<SiteCreateWithoutDolinesInput, SiteUncheckedCreateWithoutDolinesInput>
  }

  export type ItemCreateWithoutDolinesInput = {
    id?: string
    name: string
    uom: string
  }

  export type ItemUncheckedCreateWithoutDolinesInput = {
    id?: string
    name: string
    uom: string
  }

  export type ItemCreateOrConnectWithoutDolinesInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutDolinesInput, ItemUncheckedCreateWithoutDolinesInput>
  }

  export type DoUpsertWithoutDolinesInput = {
    update: XOR<DoUpdateWithoutDolinesInput, DoUncheckedUpdateWithoutDolinesInput>
    create: XOR<DoCreateWithoutDolinesInput, DoUncheckedCreateWithoutDolinesInput>
    where?: DoWhereInput
  }

  export type DoUpdateToOneWithWhereWithoutDolinesInput = {
    where?: DoWhereInput
    data: XOR<DoUpdateWithoutDolinesInput, DoUncheckedUpdateWithoutDolinesInput>
  }

  export type DoUpdateWithoutDolinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: StringFieldUpdateOperationsInput | string
    customer?: CustomerUpdateOneRequiredWithoutDosNestedInput
  }

  export type DoUncheckedUpdateWithoutDolinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: StringFieldUpdateOperationsInput | string
  }

  export type SiteUpsertWithoutDolinesInput = {
    update: XOR<SiteUpdateWithoutDolinesInput, SiteUncheckedUpdateWithoutDolinesInput>
    create: XOR<SiteCreateWithoutDolinesInput, SiteUncheckedCreateWithoutDolinesInput>
    where?: SiteWhereInput
  }

  export type SiteUpdateToOneWithWhereWithoutDolinesInput = {
    where?: SiteWhereInput
    data: XOR<SiteUpdateWithoutDolinesInput, SiteUncheckedUpdateWithoutDolinesInput>
  }

  export type SiteUpdateWithoutDolinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    officer?: OfficerUpdateOneWithoutSitesNestedInput
  }

  export type SiteUncheckedUpdateWithoutDolinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    officerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ItemUpsertWithoutDolinesInput = {
    update: XOR<ItemUpdateWithoutDolinesInput, ItemUncheckedUpdateWithoutDolinesInput>
    create: XOR<ItemCreateWithoutDolinesInput, ItemUncheckedCreateWithoutDolinesInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutDolinesInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutDolinesInput, ItemUncheckedUpdateWithoutDolinesInput>
  }

  export type ItemUpdateWithoutDolinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    uom?: StringFieldUpdateOperationsInput | string
  }

  export type ItemUncheckedUpdateWithoutDolinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    uom?: StringFieldUpdateOperationsInput | string
  }

  export type DoCreateManyCustomerInput = {
    id?: string
    number: string
    date: Date | string
    project: string
  }

  export type DoUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: StringFieldUpdateOperationsInput | string
    dolines?: DolineUpdateManyWithoutDoNestedInput
  }

  export type DoUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: StringFieldUpdateOperationsInput | string
    dolines?: DolineUncheckedUpdateManyWithoutDoNestedInput
  }

  export type DoUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: StringFieldUpdateOperationsInput | string
  }

  export type DolineCreateManyItemInput = {
    id?: string
    doId: string
    siteId: string
    qty: number
    startDate: Date | string
    endDate: Date | string
  }

  export type DolineUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    do?: DoUpdateOneRequiredWithoutDolinesNestedInput
    site?: SiteUpdateOneRequiredWithoutDolinesNestedInput
  }

  export type DolineUncheckedUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    doId?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DolineUncheckedUpdateManyWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    doId?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteCreateManyOfficerInput = {
    id?: string
    name: string
  }

  export type SiteUpdateWithoutOfficerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dolines?: DolineUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateWithoutOfficerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dolines?: DolineUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateManyWithoutOfficerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DolineCreateManySiteInput = {
    id?: string
    doId: string
    itemId: string
    qty: number
    startDate: Date | string
    endDate: Date | string
  }

  export type DolineUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    do?: DoUpdateOneRequiredWithoutDolinesNestedInput
    item?: ItemUpdateOneRequiredWithoutDolinesNestedInput
  }

  export type DolineUncheckedUpdateWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    doId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DolineUncheckedUpdateManyWithoutSiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    doId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DolineCreateManyDoInput = {
    id?: string
    siteId: string
    itemId: string
    qty: number
    startDate: Date | string
    endDate: Date | string
  }

  export type DolineUpdateWithoutDoInput = {
    id?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    site?: SiteUpdateOneRequiredWithoutDolinesNestedInput
    item?: ItemUpdateOneRequiredWithoutDolinesNestedInput
  }

  export type DolineUncheckedUpdateWithoutDoInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DolineUncheckedUpdateManyWithoutDoInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}