# miDbPet 🐾  

## Descripción  

miDbPet es una base de datos desarrollada para gestionar y almacenar la información generada por dispositivos IoT destinados al cuidado y monitoreo de mascotas. Esta base de datos se integra con dos dispositivos específicos: petFeeder, un alimentador automático para mascotas, y petMonitor, una cámara de monitoreo. Los usuarios interactúan con estos dispositivos a través de una aplicación web que les permite controlar y monitorizar sus dispositivos de forma remota.  

## Tecnologías Utilizadas  

**MongoDB:** Base de datos principal para almacenar toda la información relacionada con usuarios, dispositivos, alertas y registros.

**Docker:** Utilizado para contenerizar la base de datos, asegurando un despliegue consistente en cualquier entorno.

**ESP32 y ESP32Cam:** Hardware principal de los dispositivos petFeeder y petMonitor respectivamente.

**Socket.io (u otra tecnología similar):** Para la transmisión en tiempo real del streaming de video desde petMonitor.

**Aplicación Web:** Interfaz principal para los usuarios, donde pueden acceder y controlar sus dispositivos, así como visualizar alertas y registros.  

## Características Principales  
**Perfil de Usuario:** Los usuarios pueden registrarse e iniciar sesión en la aplicación web usando su email y un token. Una vez dentro, pueden cambiar su contraseña, acceder a sus dispositivos y controlar/monitorizar su actividad.

**Validación de Usuarios:** La base de datos se encarga de validar la información del usuario, incluyendo el token asociado a cada dispositivo, garantizando que solo los usuarios autorizados puedan acceder a la información de sus dispositivos.

**Almacenamiento de Datos:** Aunque el streaming de video no se almacena en la base de datos, sí se almacenan otros datos relevantes, como registros de alimentación, alertas y eventos generados por los dispositivos.

## Uso  
**Acceso a la Aplicación Web:**  

Visite la aplicación web y acceda a la página de perfil.
Ingrese con su email y token. Si es su primera vez, puede registrarse proporcionando los detalles necesarios.
Una vez dentro, puede cambiar su contraseña y acceder a las distintas funcionalidades de la aplicación.  

**Configuración de petFeeder:**  

Asegúrese de que el dispositivo esté conectado y en línea.
Alimente el dispositivo con el token proporcionado durante la compra para garantizar su autenticación y asociación con un usuario específico en la base de datos.
Una vez configurado, los registros de alimentación y otros eventos se enviarán automáticamente a miDbPet.  

**Configuración de petMonitor:**  

Asegúrese de que el dispositivo esté conectado y en línea.
Alimente el dispositivo con el token proporcionado durante la compra para garantizar su autenticación y asociación con un usuario específico en la base de datos.
El streaming de video se puede ver en tiempo real a través de la plataforma web utilizando Socket.io (u otra tecnología similar) para la transmisión en tiempo real. Aunque este streaming no se almacena en la base de datos, cualquier alerta o evento relacionado sí será registrado.  

## Contribuciones  

Las contribuciones son bienvenidas. Por favor, haga un fork del repositorio y cree una Pull Request para cualquier mejora o corrección.  

## Licencia  
MIT License. Vea el archivo LICENSE para más detalles.  
