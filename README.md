# QTable
Simple table with fixed header, provided with 2 themes `light` and `dark`

Checked on IE >= 9, Edge and Chrome

## Usage
* import `TableLightComponent`
* put `<q-table-light>` in your html code
* specify width and height of the component
* Inputs:
* * `head`: `{name:string;label:string}[]`
    Array of headers (name - column uid (used in combination with `data`), label - visible column header)
* * `data`: `{}[]`
    Array of Objects with data for the table
* * `options` : `{}`
* * * `bypassSecurity` : `boolean` (default: `false`)
        Disables angular security check for innerHTML of the tables
* Outputs:
* * `tableClick`: `{event:Event, type:string, row:{}, col:{}, index:number|null}`
* * * `event` : `Event`
        Cell click event
* * * `type`: `string` = `head` | `cell`
* * * `row`: `{}`
        Head or body row on which user clicked
* * * `cell`: `{}`
        Cell that was clicked
* * * `index`: `number` | `null`
        Row index that was clicked or null if it was header

***

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
