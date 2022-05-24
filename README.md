# Storybook Workshop Codemotion

Iniziamo installando React e instanziando Storybook

`npx creare-react-app wb-storybook`
`npm uninstall --save react-scripts`
`npm uninstall --save web-vitals`
`npm uninstall --save @testing-library`
`npm install --save-dev storybook`
`npx sb init`
`npm run storybook`

Una volta avviato Storybook possiamo notare:
- sidebar -> storie, doc, gerarchia
- toolbar -> canvas, docs, plusanti vari
- addons -> controls, actions, interactions
[https://storybook.js.org/docs/react/essentials/controls](https://storybook.js.org/docs/react/essentials/controls)

Testing
- visual test
	npm install --save-dev chromatic
	npx chromatic --project-token=3df49fd6685d
	[https://storybook.js.org/docs/react/writing-tests/visual-testing](https://storybook.js.org/docs/react/writing-tests/visual-testing)
- accessibility test
	npm install @storybook/addon-a11y --save-dev
	[https://storybook.js.org/docs/react/writing-tests/accessibility-testing](https://storybook.js.org/docs/react/writing-tests/accessibility-testing)
- interaction test
	npm install @storybook/testing-library @storybook/jest --save-dev
	[https://storybook.js.org/docs/react/writing-tests/interaction-testing](https://storybook.js.org/docs/react/writing-tests/interaction-testing)
	[https://github.com/storybookjs/storybook/blob/next/addons/interactions/README.md](https://github.com/storybookjs/storybook/blob/next/addons/interactions/README.md)
- snapshot test


Addons
[https://storybook.js.org/addons/](https://storybook.js.org/addons/)

1- links
2- accessibility
3- design
4- storysource
5- chromatic
6- viewport
7- measure
8- react theming
9- badge
10- performance
11- apollo -> graphql-api

Builder
[https://storybook.js.org/docs/react/builders/overview](https://storybook.js.org/docs/react/builders/overview)