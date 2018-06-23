import React from 'react';

import Analyzer from 'Parser/Core/Analyzer';
import Combatants from 'Parser/Core/Modules/Combatants';

import ITEMS from 'common/ITEMS';
import SpellLink from 'common/SpellLink';
import SPELLS from 'common/SPELLS';

class SoulOfTheNetherlord extends Analyzer {
  static dependencies = {
    combatants: Combatants,
  };

  constructor(...args) {
    super(...args);
    this.active = this.combatants.selected.hasFinger(ITEMS.SOUL_OF_THE_NETHERLORD.id);
  }

  item() {
    return {
      item: ITEMS.SOUL_OF_THE_NETHERLORD,
      result: <React.Fragment>This gave you the <SpellLink id={SPELLS.SOUL_CONDUIT_TALENT.id} /> talent.</React.Fragment>,
    };
  }
}

export default SoulOfTheNetherlord;
