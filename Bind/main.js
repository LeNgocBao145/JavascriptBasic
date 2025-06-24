const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const app = (() => {
    const cars = [];
    const list = $('#list');
    const btn = $('#submit');
    const input = $('#input');

    return {
        add(car){
            cars.push(car);
        },

        delete(index){
            cars.splice(index, 1);
        },

        handleEvent(e){
            
            const deleteBtn = e.target.closest('.delete');
            if(deleteBtn){
                const index = deleteBtn.dataset.index;
                this.delete(index);
                this.render();
            }
        },

        render(){
            const html = cars.map(car => 
                `<li>
                ${car}
                <span class="delete" data-index="${cars.indexOf(car)}">X</span>
                </li>`
            ).join('');
            list.innerHTML = html;
        },
        
        init(){
            btn.onclick = () => {
                this.add(input.value);
                this.render();
                input.value = '';
                input.focus();
            }
            list.onclick = this.handleEvent.bind(this);
            this.render();
        }
    };
})()

app.init();