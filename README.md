# Información sobre SabiApp

## Link del deploy

https://naughty-mestorf-c0d12a.netlify.app/

## Instrucciones generales

La App consta de 4 vistas, cuyas validaciones se explican a continuación:

### Registo de Telefono o Correo (Paso 1/3)

#### Teléfono

Acepta cualquier número de 13 dígitos incluyendo el código país y el signo '+':

- Ejemplos de Formatos válidos:

  - **+584143256584**
  - **+542126584123**
  - etc

- Ejemplos de Formatos no válidos:

  - Numeros sin el signo '+' : **584123064500**
  - Numeros con mas o menos de 13 digitos
  - Numeros que posean ceros (0) en los primeros 3 dígitos después del codigo pais: **+580002350355**

#### Correo

Acepta cualquier correo siempre que cumpla con la estructura básica

- Ejemplo de Formato válido:

  - **nombre@dominio.something**

- Ejemplo de Formato no válido:
  - **email.com**
  - **email@something**
  - etc

### Verificación de código (Paso 2/3)

#### Teléfono

Acepta cualquier numero de 6 digitos

- Ejemplo de Formato válido:
  - **123456**

### Registro de usuario y contraseña (Paso 3/3)

#### Nombre de usuario

Acepta cualquier cadena de texto. **La única condición es que no puede quedar vacio**

#### Contraseña

Acepta cualquier cadena de texto. **La unica condición es que sea mayor a 6 dígitos**

#### Confirmación de Contraseña

Como su nombre lo indica, **debe coincidir con Contraseña de lo contrario arrojará error**

### Comentarios Adicionales

- La **API empleada para el GET y POST** fue: https://jsonplaceholder.typicode.com/users
- La **API responsable de las imagenes** de la ultima vista es https://robohash.org/
- Al hacer click en el botón **Finalizar** del **paso 3/3** se imprime en consola el **Object response** del **POST** de la API en el que se observa un id auto generado por dicha API
- Los folders que componen al proyecto son los siguientes:
  - assets: contiene los iconos empleados
  - components: contiene todos los componentes o partes de la aplicación
  - hoc: contiene los **higher-order components** empleados. En este caso solo fue uno, y corresponde al "loading screen"
  - hooks: contiene los **custom hooks** realizados
  - validations: contiene todo lo relacionado a las validaciones de los forms
- El dropdown del paso (1/3) también es funcional, aunque su input no se haya empleado. Se puede observar por consola los valores elegidos en todo momento
