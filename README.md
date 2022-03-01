# AppCheckOut

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.1.

## Estructura del proyecto

### Components 
Contiene el componente formulario de la pasarela de pago, este usa rective form, de esta forma controlo todas las entradas desde form-check.component.ts, usando Validators para indicar que son campos requeridos y patrones para que los datos introducidos tengan el formato requerido.
Para el campo Zip code solo se valida que haya un valor, ya que existen multitud de formatos de este y no se especifica cual debe seguir.
Para el campo credit card se valida que tenga el formato especificado en la imagen aunque pudieran existir otros formatos de tarjate válidos.
Contiene también el componente success, es el modal con el mensaje de exito y boton para cerrarlo.

### Services
service-modal es el servicio que permite cerrar el modal de forma simple, cuando tocamos cerrar, se emite un observable al que nos suscribimos desde el componente que lo usa, cuando cambia el valor de true a false se oculta el modal.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
