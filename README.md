# Práctica 7: Modelo de datos de un sistema que permite el diseño de menúsTarea

## 1. Introducción

A modo de introducción, se detallará un informe de la séptima práctica de la asignatura Desarrollo de Sistemas Informáticos del grado de Ingeniería Informática sobre un diseño orientado a objetos del modelo de datos de un sistema de información que permite el diseño de menús. 

Esta práctica es la primera que se desarrolla en grupo y su estructura es similar a la de las prácticas individuales realizadas durante el cuatrimestre. Partimos de un directorio raíz el cual contiene los ficheros de configuración, el código fuente y las pruebas unitarias del proyecto. 

## 2. Descripción de los requisitos del sistema de diseño de menús

### 2.1 Alimentos y/o ingredientes

Para cada alimento o ingrediente considerado dentro del sistema de diseño de menús se debe almacenar la información siguiente:
1. Grupo de alimentos al que pertenece que puede ser:
- Carnes, pescados, huevos, tofu, frutos secos, semillas y legumbres.
- Verduras y hortalizas.
- Leche y derivados.
- Cereales.
- Frutas.

2. La composición nutricional del alimento con respecto a los macronutrientes y kcal por 100 gr de dicho alimento.
- Macronutrientes: Hidratos de carbono, proteínas y lípidos.

3. Precio del alimento y/o ingrediente por kg en euros.
Además, un alimento tendrá un nombre y localización de origen (país, ciudad, etc.)

### 2.2 Platos

Los platos de un menú estarán compuestos por alimentos y/o ingredientes como los definidos anteriormente. Además, deberá considerar que un plato puede pertener a cuatro categorías distintas: entrante, primer plato, segundo plato y postre. Asimismo, para cada plato dentro del sistema se debería poder acceder a la siguiente información:
1. Lista de alimentos y/o ingredientes que lo componen.

2. Composición nutricional del plato. Esto es, la suma de la composición nutricional de los alimentos que componen el plato. Hay que tener en cuenta que los valores nutricionales se definen por 100 gr de ingrediente, pero no siempre se usan 100 gr de cada ingrediente para elaborar un plato.

3. Grupo de alimento predominante. Este atributo deberá definir el grupo de alimento que más aparece entre los ingredientes del plato.

4. Precio total del plato en euros en función de la suma de los precios de los ingredientes y sus cantidades que lo componen.

### 2.3 Menús

Un menú estará compuesto por platos, incluyendo un plato de cada categoría o, al menos, tres de ellas. Para cada menú, se debe poder consultar la siguiente información:
1. Precio total del menú en euros.

2. Platos que lo componen con sus correspodientes alimentos y/o ingredientes.

3. Composición nutricional del menú de acuerdo a lo definido en el punto 2 de la sección Alimentos.

4. Listado de grupos de alimentos por orden de aparición.

### 2.4 Carta

Supongamos que el sistema que estamos diseñando se empleará en un restaurante. Dicho restaurante dispone de una carta con una serie de menús prediseñados por la administración del local. Además, en la carta se incluyen platos individuales para que los comensales diseñen sus propios menús para comer. Los menús a diseñar por los clientes pueden tener todos los platos que deseen ya que, por ejemplo, un grupo de personas podría decidir pedir varios platos para compartir o pedirlos individualmente.

## 3. Funcionamiento

Para comprobar el funcionamiento de su diseño deberá crear:
1. Al menos 50 alimentos y/o ingredientes distintos para cocinar platos. Puede ayudarse del siguiente [recurso](https://drive.google.com/file/d/1B-jULJvgWmphWsZV1e3BG0fGL77jokSZ/view) para cumplimentar esta información.

2. Entre 5 y 10 platos por cada categoría (entrante, primer plato, etc).

3. Un mínimo de 5 menús distintos con los platos creados anteriormente.

4. Una carta conformada por los diferentes menús diseñados.

En este punto, deberá hacer uso del módulo __Inquirer.js__ para la gestión de una línea de comandos interactiva. De este modo, su aplicación deberá permitir añadir, borrar y modificar ingredientes, platos, menús y cartas. Para ello, le recomendamos que lea el Capítulo 1 del libro Essential TypeScript: From Beginner to Pro, dado que se describe un ejemplo detallado de su uso, incluyendo cómo podría hacer para que toda la información introducida persista mediante el uso del paquete __Lowdb__.

### 3.1 Clase Comanda

Por último, deberá crear una clase Comanda que permita almacenar la comanda de un nuevo cliente de restaurante. Recuerde que la comanda de un cliente puede ser un menú predefinido o un menú personalizado con los platos que el cliente desee.

Para el funcionamiento de la clase Comanda, también necesitará hacer uso de __Inquirer.js__. En concreto, un cliente podrá:
1. Visualizar la carta del restaurante. Para cada menú y/o plato, el cliente querrá poder observar toda la información que tiene (precio, ingredientes, composición nutricional y grupos de alimentos).

2. Realizar una comanda. Un cliente podrá realizar una comanda a partir de un menú preestablecido o bien solicitando un menú personalizado. En caso de solicitar un menú personalizado, se deberá proporcionar la opción de visualizar la carta completa del restaurante, seleccionar cualquier plato del sistema y en la cantidad que el cliente considere oportuna (siempre de manera entera, no una ración y media por ejemplo). Por último, considere que un cliente puede solicitar un menú personalizado a partir de un menú existente. Por ejemplo, eliminando o añadiendo distintos platos al menú.

## 4. Desarrollo del proyecto

### 4.1 Clase ingredientes

En primer lugar, se ha creado una enumeración que permite definir un conjunto de constantes con nombre, en este caso, los diferentes grupos a los que pertecene un ingrediente. 

Acto seguido, se declara un alias de tipo para la tupla que contendrá la composición nutricional del alimento con respecto a los macronutrientes y kcal por 100 gr de dicho alimento.

Por último, la clase ingrediente se encarga de crear un objeto cuyas propiedades serán su nombre, localización, grupo al que pertenece como detallabamos anteriormente, los macronutrientes, el total de kcal y su precio. Destacar que todas estas propiedades son privadas, y se accederán a ellas desde otras clases importando a la misma con su ruta correspondiente y haciendo uso de los métodos get. 

Se puede observar el código a continuación:

![Error al cargar la imagen de la clase ingrediente]()

![Test de la clase ingrediente]()
### 4.2 Clase plato

### 4.3 Clase menú

### 4.4 Clase comanda

## 5. Conclusiones y dificultades

A modo de conclusión, nos ha resultado muy interesante la práctica para poner en práctica con mayor profundidad el uso de las clases y objetos en Typescript. Sin embargo, nos ha costado entender los módulos de Inquirer y del paquete Lowdb para la gestión de una línea de comandos interactiva. Por último, se ha generado la documentación en HTML mediante TypeDoc y se han realizado las respectivas pruebas unitarias. 

## 6. Referencias
1. [Guión práctica 7](https://ull-esit-inf-dsi-2021.github.io/prct07-menu-dataModel/)
2. [Inquirer](https://www.npmjs.com/package/inquirer)
3. [Lowdb](https://www.npmjs.com/package/lowdb)
4. [Recursos de ingredientes](https://drive.google.com/file/d/1B-jULJvgWmphWsZV1e3BG0fGL77jokSZ/view)