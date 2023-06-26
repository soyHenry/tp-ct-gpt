# **🤖SOFTWARE DEVELOPMENT CON CHATGPT**

# **🧑‍💻Snippets de Código**

## **📄INSTRUCCIONES**

En esta homework trabajarás en dos carpetas. Primero en "**`01 - Vainilla`**" y luego en "**`02 - Front`**".

En esta homework tendrás que trabajar en cuatro archivos distintos. El objetivo será que desarrolles tus habilidades para crear y entender testing de la mano de ChatGPT. Para esto utilizaremos dos librerías. Por un lado **Jest**, y por otro **Vitest**.

¡Buena suerte!

**⚠️ Importante:** no olvides instalar las dependencias con el comando **`npm install`** en ambas carpetas.

</br>

### **🎯EJERCICIO 01**

Dirígete al archivo [**Ejercicio 01**](./01%20-%20Vainilla/Ejercicio%2001.js). Aquí encontrarás una función llamada "**`esPalindromo`**" la cual ya está resuelta y explicada. Tu objetivo será, en el archivo [**01**](./01%20-%20Vainilla/tests/01.test.js) contruir los siguientes tests para la función (utiliza **Jest**). Recuerda que debes guiarte con ChatGPT.

1. La función debe devolver true si el string ingresado es un palíndromo.
2. La función debe devolver false si el string ingresado no es un palíndromo.
3. Si el string ingresado está vacío debe devolver true.
4. Si el string es palíndromo, aunque esté escrito todo con mayúsculas, debe devolver true.
5. Si el valor ingresado a la función no es de tipo string, debe devovler un error que diga "_'Se esperaba una cadena de texto como argumento'_".

</br>

### **🎯EJERCICIO 02**

Dirígete al archivo [**Ejercicio 02**](./01%20-%20Vainilla//Ejercicio%2002.js). Aquí encontrarás una función llamada "**`obtenerPosteo`**" la cual ya está resuelta y explicada. Tu objetivo será, en el archivo [**02**](./01%20-%20Vainilla/tests/02.test.js) contruir los siguientes tests para la función (utiliza **Jest**). Recuerda que debes guiarte con ChatGPT.

1. Si la función recibe un parámetro que **no** sea un número del 1 al 100, entonces debe devolver un status **404**, y el valor **null**.
2. Si la función recibe un número del 1 al 100, entonces debe devolver un status **200**, y un objeto con las siguientes **propiedades**.

-  userID: number.
-  id: number.
-  title: string.
-  body: string.

</br>

### **🎯EJERCICIO 03**

En este ejercicio aplicarás los principios de TDD (Testing Driven Development). Para esto dirígete al archivo [**03**](./01%20-%20Vainilla/tests/02.test.js) de testing. Aquí encontrarás tests ya creados. Tu objetivo será generar una función en el archivo [**Ejercicio 03**](./01%20-%20Vainilla/Ejercicio%2003.js) llamada "**`buscarPalabra`**" la cual aún nO fue resuelta. Recuerda que debes guiarte con ChatGPT.

</br>

### **🎯EJERCICIO 04**

En este ejercicio tendrás que hacer testing de un componente con **Vitest**. Para esto dirígente al archivo [\*\*04 - Component](./02%20-%20Front/src/04%20-%20Component.jsx). Tu objetivo será generar los siguientes tests para este componente. Los deberás crear en el archivo [04-Component](./02%20-%20Front/test/04-Component.test.js). Recuerda que debes guiarte con ChatGPT.

1. Que se renderice.
2. Debe mostrar el nombre recibido por props: **`Henry`**.
3. El estado inicial del contador debe ser cero.
4. Al hacer click en el botón, el contador debe aumentar en +1.
5. Que se muestre en la pantalla las etiquetas: H1, p y H3.
