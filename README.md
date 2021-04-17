# Práctica 7: Modelo de datos de un sistema que permite el diseño de menúsTarea

## 1. Introducción

A modo de introducción, se detallará un informe de la séptima práctica de la asignatura Desarrollo de Sistemas Informáticos del grado de Ingeniería Informática sobre un diseño orientado a objetos del modelo de datos de un sistema de información que permite el diseño de menús. 

Esta práctica es la primera que se desarrolla en grupo y su estructura es similar a la de las prácticas individuales realizadas durante el cuatrimestre. Partimos de un directorio raíz el cual contiene los ficheros de configuración, el código fuente y las pruebas unitarias del proyecto. 

Se espera que se aprenda el manejo de los módulos inquirer.js y Lowdb para la interacción con los usuarios. 

## 2. Descripción de los requisitos del sistema de diseño de menús

Se pide la creación de un programa que permita interactuar con usuarios, por un lado, para poder modificar el inventario de ingredientes y menús y cartas, y por otro para que el cliente pueda ver la carta y hacer su pedido. 

### 2.1 Alimentos y/o ingredientes

Serán la base de los menús y cada alimento debe constar de los siguientes elementos:

- Nombre.

- Lugar de origen.

- Grupo de alimentos:
    1. Carnes, pescados, huevos, tofu, frutos secos, semillas y legumbres.
    2. Verduras y hortalizas.
    3. Leche y derivados.
    4. Cereales.
    5. Frutas.

- Composición nutricional del alimento que se indica para cada 100 gr de alimento (Hidratos de carbono, proteínas y lípidos).

- Precio del alimento por kg en euros.

### 2.2 Platos

Será un conjunto de ingredientes y será del tipo entrante, primer plato, segundo plato o postre. La clase debe poder mostrar:

- Su lista de alimentos y/o ingredientes.

- Composición nutricional del plato. 

- Grupo de alimento predominante. 

- Precio del plato.

### 2.3 Menús

Es un conjunto de platos, uno de cada categoría o de tres. La clase debe poder mostrar lo siguiente:

- Precio del menú.

- Platos que lo componen con sus correspodientes alimentos y/o ingredientes.

- Composición nutricional.

- Listado de grupos de alimentos por orden de aparición.

### 2.4 Carta

Se debe poder crear una carta que contenga tanto menús como platos individuales de los que los clientes escojan todos los que quieran.

## 3. Funcionamiento

Para la interacción con los usuarios de debe crear una funcionalidad que permita la creación, modificación y borrado de ingredientes, platos o menús. 

Y una base de datos que disponga de 50 ingredientes, 5 platos de cada tipo, 5 menús y una carta.

### 3.1 Clase Comanda

Esta clase guardará el pedido de un cliente y se debe poder:

- Ver la carta (menús y platos con su información).

- Realizar una comanda donde el cliente pueda escoger un menú personalizar el suyo ya sea entero o variando alguno existente.


## 4. Desarrollo del proyecto

Para poder hacer la interacción con el usuario se usa Inquirer.js, esto es un módulo que permite coger lo que el usuario introduce en la linea de comandos en node.js haciendo una serie de preguntas y dando opciones de respuesta. 
Es necesario tener una base de datos con el stock de ingredientes y la carta disponible, y poder guardar la selección del cliente, para esto usamos el módulo Lowdb que permite la gestión de un base de datos.

### 4.1 Clase ingredientes

En primer lugar, se ha creado una enumeración que permite definir un conjunto de constantes con nombre, en este caso, los diferentes grupos a los que pertecene un ingrediente. 

Acto seguido, se declara un alias de tipo para la tupla que contendrá la composición nutricional del alimento con respecto a los macronutrientes y kcal por 100 gr de dicho alimento.

Por último, la clase ingrediente se encarga de crear un objeto cuyas propiedades serán su nombre, localización, grupo al que pertenece como detallabamos anteriormente, los macronutrientes, el total de kcal y su precio. Destacar que todas estas propiedades son privadas, y se accederán a ellas desde otras clases importando a la misma con su ruta correspondiente y haciendo uso de los métodos get. 

Se puede observar el código a continuación:

![Error al cargar la imagen de la clase ingrediente](https://raw.githubusercontent.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-b/master/ejercicios/images/claseIngrediente.png?token=AKMQEBM3GMVMNL7J6YHTP5DAQPXOA)

![Test de la clase ingrediente](https://raw.githubusercontent.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct07-menu-datamodel-grupo-b/master/ejercicios/images/testIngrediente.png?token=AKMQEBLBU63GCSH65SFUC5TAQPXRC)

### 4.2 Clase plato

### 4.3 Clase menú

Esta clase permite la creación de un menú. Para ello se permite guardar en un array los platos que lo formen.

### 4.4 Clase comanda

## 5. Conclusiones y dificultades

A modo de conclusión, nos ha resultado muy interesante la práctica para poner en práctica con mayor profundidad el uso de las clases y objetos en Typescript. Sin embargo, nos ha costado entender los módulos de Inquirer y del paquete Lowdb para la gestión de una línea de comandos interactiva. Por último, se ha generado la documentación en HTML mediante TypeDoc y se han realizado las respectivas pruebas unitarias. 

## 6. Referencias
1. [Guión práctica 7](https://ull-esit-inf-dsi-2021.github.io/prct07-menu-dataModel/)
2. [Inquirer](https://www.npmjs.com/package/inquirer)
3. [Lowdb](https://www.npmjs.com/package/lowdb)
4. [Recursos de ingredientes](https://drive.google.com/file/d/1B-jULJvgWmphWsZV1e3BG0fGL77jokSZ/view)