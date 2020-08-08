Dudas
El store tiene un service asociado que llama al método update ¿Solo para modificaciones?->SI

La query es solo para consultas?->SI

The Query select methods always returns an observable which pushes the initial value first.-> 
Devuelve el estado sin modificar al principiop?->EMITE siempre un valor al principio, aunque no haya cambiado, que será el inital (initialState)

¿PAra qué sirve el loading del store?-> <mat-spinner *ngIf="facturasQuery.loading$ | async"></mat-spinner>


El store general es para el estado general de la app y los EntityState de bbdd?->SI

Qué son las active entity?-> Entidad activa sobre la que estás trabajando

Es el service el que llama al service-data para actualizar la info? y luego actualiza tambien el store correspondiente?