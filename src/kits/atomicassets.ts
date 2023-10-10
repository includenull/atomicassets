import type {Action, Int32Type, NameType, UInt64Type} from '@wharfkit/antelope'
import {Asset, Collection, Offer, Schema, Template} from '../objects'

import type * as AtomicAssetsContract from '../contracts/atomicassets'
import type {AtomicUtility} from '../utility'

export class AtomicAssetsKit {
    readonly utility: AtomicUtility

    constructor(utility: AtomicUtility) {
        this.utility = utility
    }

    async loadCollection(collectionName: NameType): Promise<Collection> {
        const data = await this.utility.atomicClient.atomicassets.v1.get_collection(collectionName)

        return Collection.from(data.data, this.utility)
    }

    createCollection(value: AtomicAssetsContract.Types.Createcol): Action {
        return this.utility.assetsContract.action('createcol', value)
    }

    async loadSchema(collectionName: NameType, schemaName: NameType): Promise<Schema> {
        const data = await this.utility.atomicClient.atomicassets.v1.get_schema(
            collectionName,
            schemaName
        )

        return Schema.from(data.data, this.utility)
    }

    createSchema(value: AtomicAssetsContract.Types.Createschema): Action {
        return this.utility.assetsContract.action('createschema', value)
    }

    async loadTemplate(collectionName: NameType, templateId: Int32Type): Promise<Template> {
        const data = await this.utility.atomicClient.atomicassets.v1.get_template(
            collectionName,
            templateId
        )

        return Template.from(data.data, this.utility)
    }

    createTemplate(value: AtomicAssetsContract.Types.Createtempl): Action {
        return this.utility.assetsContract.action('createtempl', value)
    }

    async loadAsset(assetId: UInt64Type): Promise<Asset> {
        const data = await this.utility.atomicClient.atomicassets.v1.get_asset(assetId)

        return Asset.from(data.data, this.utility)
    }

    mintAsset(value: AtomicAssetsContract.Types.Mintasset): Action {
        return this.utility.assetsContract.action('mintasset', value)
    }

    async loadOffer(offerId: UInt64Type): Promise<Offer> {
        const data = await this.utility.atomicClient.atomicassets.v1.get_offer(offerId)

        return Offer.from(data.data, this.utility)
    }

    createOffer(value: AtomicAssetsContract.Types.Createoffer): Action {
        return this.utility.assetsContract.action('createoffer', value)
    }

    transfer(value: AtomicAssetsContract.Types.Transfer): Action {
        return this.utility.assetsContract.action('transfer', value)
    }

    withdraw(value: AtomicAssetsContract.Types.Withdraw): Action {
        return this.utility.assetsContract.action('withdraw', value)
    }

    addConfToken(value: AtomicAssetsContract.Types.Addconftoken): Action {
        return this.utility.assetsContract.action('addconftoken', value)
    }

    adminColEdit(value: AtomicAssetsContract.Types.Admincoledit): Action {
        return this.utility.assetsContract.action('admincoledit', value)
    }

    announceDepo(value: AtomicAssetsContract.Types.Announcedepo): Action {
        return this.utility.assetsContract.action('announcedepo', value)
    }

    setVersion(value: AtomicAssetsContract.Types.Setversion): Action {
        return this.utility.assetsContract.action('setversion', value)
    }
}
