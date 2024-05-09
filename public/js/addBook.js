document.addEventListener('DOMContentLoaded', async () => {
    const submitButton = document.getElementById('submit-button') 
    
    document.getElementById('add-book-form').addEventListener('submit', async (event) => {
        event.preventDefault();
    
        if (!document.getElementById('image').files.length) {
            alert('Por favor, selecione um arquivo antes de enviar.');
            return;
        }
    
        const formData = new FormData();
        formData.append('name', document.getElementById('name').value);
        formData.append('description', document.getElementById('description').value);
        formData.append('author', document.getElementById('author').value);
        formData.append('year', document.getElementById('year').value);
        formData.append('publisher', document.getElementById('publisher').value);
        formData.append('image', document.getElementById('image').files[0]);
    
        submitButton.disabled = true;

        const response = await fetch('/api/book/', {
            method: 'POST',
            body: formData
        });
    
        if (response.ok) {
            alert('Livro adicionado com sucesso!');
            window.location.href = `/bookshelf`;
        } else {
            alert('Falha ao adicionar livro');
        }
    });
    
    document.getElementById('image').addEventListener('change', function() {
        document.getElementById('file-name').textContent = this.files[0].name;
    });
})




