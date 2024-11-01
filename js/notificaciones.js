
function nuevaNotificacion() {
  alert ("Tiene una nueva notificación");
}

function salirNotificacion() {
  confirm ("Confirma que desea salir del sistema de notificaciones?");
}

function enviarNotificacion() {
  let mensaje = prompt ("Escriba la notificación a enviar");
  if(mensaje) {
    alert ("Notificación enviada")
  }
}
