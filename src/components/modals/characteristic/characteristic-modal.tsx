import { Characteristic } from '../../../enums/characteristic';
import { DieRollPanel } from '../../panels/die-roll/die-roll-panel';
import { Hero } from '../../../models/hero';
import { HeroLogic } from '../../../logic/hero-logic';
import { Modal } from '../modal/modal';
import { Statistic } from 'antd';

import './characteristic-modal.scss';

interface Props {
	hero: Hero;
	characteristic: Characteristic;
}

export const CharacteristicModal = (props: Props) => {
	try {
		return (
			<Modal
				content={
					<div className='characteristic-modal'>
						<Statistic title={props.characteristic} value={HeroLogic.getCharacteristic(props.hero, props.characteristic)} />
						<DieRollPanel hero={props.hero} characteristics={[ props.characteristic ]} />
					</div>
				}
			/>
		);
	} catch (ex) {
		console.error(ex);
		return null;
	}
};
