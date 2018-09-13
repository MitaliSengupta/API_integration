import { BearerFetch, Component, Intent } from '@bearer/core'

@Component({
  tag: 'list-characters',
  shadow: true
})
export class ListCharacters {
  @Intent('listCharacters') fetcher: BearerFetch
  render() {
    return <bearer-scrollable 
		fetcher={this.fetcher}
		renderCollection={collection => (
			<bearer-navigator-collection
			data={collection}
			renderFunc={char => char.image}
			/>
		)}
	/>
    }
}