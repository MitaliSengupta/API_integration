/*
  The purpose of this component is to deal with scenario navigation between each views.

*/

import { RootComponent } from '@bearer/core'
import '@bearer/ui'

@RootComponent({
  name: 'action',
  group: 'feature'
})
export class FeatureAction {
  render() {
    return (
	<div>
      		<bearer-navigator btnProps={ { content:"rickAndMorty", kind:"primary" } } direction="right">
        		<bearer-navigator-screen navigationTitle="Characters" name="characters">
        		<list-characters />
			</bearer-navigator-screen>
      		</bearer-navigator>
	</div>
    )
  }
}
