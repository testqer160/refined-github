// TODO: https://github.com/parcel-bundler/parcel/issues/7639
import {Transformer} from '@parcel/plugin';

import {getImportedFeatures, getFeaturesMeta} from '../readme-parser';

export default new Transformer({
	async transform({asset}) {
		const code = `
			export const featureList = ${JSON.stringify(getImportedFeatures())};
			export const featuresMeta = ${JSON.stringify(getFeaturesMeta())};
		`;
		asset.setCode(code);
		asset.type = 'js';
		return [asset];
	},
});
