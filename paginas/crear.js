        // Obtener los elementos
        const notificationsIcon = document.getElementById('notifications');
        const messagesIcon = document.getElementById('messages');

        // Función para alternar el cuadro emergente
        function toggleDropdown(event) {
            event.stopPropagation();
            // Cerrar cualquier otro cuadro abierto
            document.querySelectorAll('.nav-item').forEach(item => {
                if (item !== event.currentTarget) {
                    item.classList.remove('active');
                }
            });
            
            // Alternar la clase 'active' del elemento actual
            event.currentTarget.classList.toggle('active');
        }

        // Agregar eventos de clic a los iconos
        notificationsIcon.addEventListener('click', toggleDropdown);
        messagesIcon.addEventListener('click', toggleDropdown);

        // Cerrar los cuadros emergentes si se hace clic fuera de ellos
        window.addEventListener('click', function() {
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
            });
        });