// Code generated by Prisma (prisma@1.34.3). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  heroe: (where?: HeroeWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  heroe: (where: HeroeWhereUniqueInput) => HeroeNullablePromise;
  heroes: (args?: {
    where?: HeroeWhereInput;
    orderBy?: HeroeOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Heroe>;
  heroesConnection: (args?: {
    where?: HeroeWhereInput;
    orderBy?: HeroeOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => HeroeConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createHeroe: (data: HeroeCreateInput) => HeroePromise;
  updateHeroe: (args: {
    data: HeroeUpdateInput;
    where: HeroeWhereUniqueInput;
  }) => HeroePromise;
  updateManyHeroes: (args: {
    data: HeroeUpdateManyMutationInput;
    where?: HeroeWhereInput;
  }) => BatchPayloadPromise;
  upsertHeroe: (args: {
    where: HeroeWhereUniqueInput;
    create: HeroeCreateInput;
    update: HeroeUpdateInput;
  }) => HeroePromise;
  deleteHeroe: (where: HeroeWhereUniqueInput) => HeroePromise;
  deleteManyHeroes: (where?: HeroeWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  heroe: (
    where?: HeroeSubscriptionWhereInput
  ) => HeroeSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type HeroeOrderByInput = "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface HeroeCreateInput {
  id?: Maybe<ID_Input>;
  name: String;
}

export interface HeroeUpdateInput {
  name?: Maybe<String>;
}

export interface HeroeUpdateManyMutationInput {
  name?: Maybe<String>;
}

export interface HeroeWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  AND?: Maybe<HeroeWhereInput[] | HeroeWhereInput>;
  OR?: Maybe<HeroeWhereInput[] | HeroeWhereInput>;
  NOT?: Maybe<HeroeWhereInput[] | HeroeWhereInput>;
}

export interface HeroeSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<HeroeWhereInput>;
  AND?: Maybe<HeroeSubscriptionWhereInput[] | HeroeSubscriptionWhereInput>;
  OR?: Maybe<HeroeSubscriptionWhereInput[] | HeroeSubscriptionWhereInput>;
  NOT?: Maybe<HeroeSubscriptionWhereInput[] | HeroeSubscriptionWhereInput>;
}

export type HeroeWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface NodeNode {
  id: ID_Output;
}

export interface AggregateHeroe {
  count: Int;
}

export interface AggregateHeroePromise
  extends Promise<AggregateHeroe>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateHeroeSubscription
  extends Promise<AsyncIterator<AggregateHeroe>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface HeroePreviousValues {
  id: ID_Output;
  name: String;
}

export interface HeroePreviousValuesPromise
  extends Promise<HeroePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface HeroePreviousValuesSubscription
  extends Promise<AsyncIterator<HeroePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface HeroeEdge {
  node: Heroe;
  cursor: String;
}

export interface HeroeEdgePromise extends Promise<HeroeEdge>, Fragmentable {
  node: <T = HeroePromise>() => T;
  cursor: () => Promise<String>;
}

export interface HeroeEdgeSubscription
  extends Promise<AsyncIterator<HeroeEdge>>,
    Fragmentable {
  node: <T = HeroeSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface HeroeSubscriptionPayload {
  mutation: MutationType;
  node: Heroe;
  updatedFields: String[];
  previousValues: HeroePreviousValues;
}

export interface HeroeSubscriptionPayloadPromise
  extends Promise<HeroeSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = HeroePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = HeroePreviousValuesPromise>() => T;
}

export interface HeroeSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<HeroeSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = HeroeSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = HeroePreviousValuesSubscription>() => T;
}

export interface Heroe {
  id: ID_Output;
  name: String;
}

export interface HeroePromise extends Promise<Heroe>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface HeroeSubscription
  extends Promise<AsyncIterator<Heroe>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface HeroeNullablePromise
  extends Promise<Heroe | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface HeroeConnection {
  pageInfo: PageInfo;
  edges: HeroeEdge[];
}

export interface HeroeConnectionPromise
  extends Promise<HeroeConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<HeroeEdge>>() => T;
  aggregate: <T = AggregateHeroePromise>() => T;
}

export interface HeroeConnectionSubscription
  extends Promise<AsyncIterator<HeroeConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<HeroeEdgeSubscription>>>() => T;
  aggregate: <T = AggregateHeroeSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Heroe",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
