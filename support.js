function openPopup() {
            document.getElementById('popup').classList.add('show');
        }

        function closePopup() {
            document.getElementById('popup').classList.remove('show');
        }

        function copyUPI() {
            const upiId = 'yourname@paytm';
            navigator.clipboard.writeText(upiId);
            alert('UPI ID copied!');
        }
        document.addEventListener('click', function(event) {
            const popup = document.getElementById('popup');
            const button = document.querySelector('.support-btn');
            
            if (!popup.contains(event.target) && !button.contains(event.target)) {
                closePopup();
            }
        });