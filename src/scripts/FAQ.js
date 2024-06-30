document.addEventListener("DOMContentLoaded", function() {
    const questionButtons = document.querySelectorAll('.pergunta__button');
    
    questionButtons.forEach(button => {
        button.addEventListener("click", function() {
            const resposta = this.nextElementSibling;

            if (this.classList.contains("pergunta__button--clicado")) {
                this.classList.remove("pergunta__button--clicado");
                resposta.classList.remove("pergunta__resposta--aberta");
            } else {
                this.classList.add("pergunta__button--clicado");
                resposta.classList.add("pergunta__resposta--aberta");
            }
        });
    });
});
