[@sitecore-jss/sitecore-jss-nextjs](../README.md) / [index](../modules/index.md) / GraphQLDictionaryService

# Class: GraphQLDictionaryService

[index](../modules/index.md).GraphQLDictionaryService

Service that fetch dictionary data using Sitecore's GraphQL API.

**`Mixes`**

SearchQueryService<DictionaryQueryResult>

## Hierarchy

- `DictionaryServiceBase`

  ↳ **`GraphQLDictionaryService`**

## Table of contents

### Constructors

- [constructor](index.GraphQLDictionaryService.md#constructor)

### Properties

- [graphQLClient](index.GraphQLDictionaryService.md#graphqlclient)
- [options](index.GraphQLDictionaryService.md#options)
- [searchService](index.GraphQLDictionaryService.md#searchservice)

### Methods

- [fetchDictionaryData](index.GraphQLDictionaryService.md#fetchdictionarydata)
- [fetchWithSearchQuery](index.GraphQLDictionaryService.md#fetchwithsearchquery)
- [fetchWithSiteQuery](index.GraphQLDictionaryService.md#fetchwithsitequery)
- [getCacheClient](index.GraphQLDictionaryService.md#getcacheclient)
- [getCacheValue](index.GraphQLDictionaryService.md#getcachevalue)
- [getGraphQLClient](index.GraphQLDictionaryService.md#getgraphqlclient)
- [setCacheValue](index.GraphQLDictionaryService.md#setcachevalue)

## Constructors

### constructor

• **new GraphQLDictionaryService**(`options`)

Creates an instance of graphQL dictionary service with the provided options

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`GraphQLDictionaryServiceConfig`](../interfaces/index.GraphQLDictionaryServiceConfig.md) | instance |

#### Overrides

DictionaryServiceBase.constructor

#### Defined in

sitecore-jss/types/i18n/graphql-dictionary-service.d.ts:73

## Properties

### graphQLClient

• `Private` **graphQLClient**: `any`

#### Defined in

sitecore-jss/types/i18n/graphql-dictionary-service.d.ts:67

___

### options

• **options**: [`GraphQLDictionaryServiceConfig`](../interfaces/index.GraphQLDictionaryServiceConfig.md)

#### Overrides

DictionaryServiceBase.options

#### Defined in

sitecore-jss/types/i18n/graphql-dictionary-service.d.ts:66

___

### searchService

• `Private` **searchService**: `any`

#### Defined in

sitecore-jss/types/i18n/graphql-dictionary-service.d.ts:68

## Methods

### fetchDictionaryData

▸ **fetchDictionaryData**(`language`): `Promise`\<[`DictionaryPhrases`](../interfaces/index.DictionaryPhrases.md)\>

Fetches dictionary data for internalization. Uses search query by default

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `language` | `string` | the language to fetch |

#### Returns

`Promise`\<[`DictionaryPhrases`](../interfaces/index.DictionaryPhrases.md)\>

dictionary phrases

**`Throws`**

if the app root was not found for the specified site and language.

#### Overrides

DictionaryServiceBase.fetchDictionaryData

#### Defined in

sitecore-jss/types/i18n/graphql-dictionary-service.d.ts:80

___

### fetchWithSearchQuery

▸ **fetchWithSearchQuery**(`language`): `Promise`\<[`DictionaryPhrases`](../interfaces/index.DictionaryPhrases.md)\>

Fetches dictionary data with search query
This is the default behavior for non-XMCloud deployments

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `language` | `string` | the language to fetch |

#### Returns

`Promise`\<[`DictionaryPhrases`](../interfaces/index.DictionaryPhrases.md)\>

dictionary phrases

**`Default`**

```ts
query (@see query)
```

**`Throws`**

if the app root was not found for the specified site and language.

#### Defined in

sitecore-jss/types/i18n/graphql-dictionary-service.d.ts:89

___

### fetchWithSiteQuery

▸ **fetchWithSiteQuery**(`language`): `Promise`\<[`DictionaryPhrases`](../interfaces/index.DictionaryPhrases.md)\>

Fetches dictionary data with site query
This is the default behavior for XMCloud deployments

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `language` | `string` | the language to fetch |

#### Returns

`Promise`\<[`DictionaryPhrases`](../interfaces/index.DictionaryPhrases.md)\>

dictionary phrases

**`Default`**

```ts
siteQuery (@see siteQuery)
```

#### Defined in

sitecore-jss/types/i18n/graphql-dictionary-service.d.ts:97

___

### getCacheClient

▸ `Protected` **getCacheClient**(): [`CacheClient`](../interfaces/index.CacheClient.md)\<[`DictionaryPhrases`](../interfaces/index.DictionaryPhrases.md)\>

Gets a cache client that can cache data. Uses memory-cache as the default
library for caching (@see MemoryCacheClient). Override this method if you
want to use something else.

#### Returns

[`CacheClient`](../interfaces/index.CacheClient.md)\<[`DictionaryPhrases`](../interfaces/index.DictionaryPhrases.md)\>

implementation

#### Inherited from

DictionaryServiceBase.getCacheClient

#### Defined in

sitecore-jss/types/i18n/dictionary-service.d.ts:49

___

### getCacheValue

▸ **getCacheValue**(`key`): ``null`` \| [`DictionaryPhrases`](../interfaces/index.DictionaryPhrases.md)

Retrieves a

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The cache key. |

#### Returns

``null`` \| [`DictionaryPhrases`](../interfaces/index.DictionaryPhrases.md)

The

**`See`**

 - DictionaryPhrases value from the cache.
 - DictionaryPhrases value, or null if the specified key is not found in the cache.

#### Inherited from

DictionaryServiceBase.getCacheValue

#### Defined in

sitecore-jss/types/i18n/dictionary-service.d.ts:42

___

### getGraphQLClient

▸ `Protected` **getGraphQLClient**(): `GraphQLClient`

Gets a GraphQL client that can make requests to the API. Uses graphql-request as the default
library for fetching graphql data (@see GraphQLRequestClient). Override this method if you
want to use something else.

#### Returns

`GraphQLClient`

implementation

#### Defined in

sitecore-jss/types/i18n/graphql-dictionary-service.d.ts:104

___

### setCacheValue

▸ **setCacheValue**(`key`, `value`): [`DictionaryPhrases`](../interfaces/index.DictionaryPhrases.md)

Caches a

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | The cache key. |
| `value` | [`DictionaryPhrases`](../interfaces/index.DictionaryPhrases.md) | The value to cache. |

#### Returns

[`DictionaryPhrases`](../interfaces/index.DictionaryPhrases.md)

The value added to the cache.

**`See`**

DictionaryPhrases value for the specified cache key.

**`Mixes`**

CacheClient<DictionaryPhrases>

#### Inherited from

DictionaryServiceBase.setCacheValue

#### Defined in

sitecore-jss/types/i18n/dictionary-service.d.ts:36
