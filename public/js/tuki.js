const techFirst = document.querySelector('.tech__first');
const items = document.createElement('div');
items.classList.add('tech__items');
const techs = [
    {
       image: 'public/assets/icons/piero_cusi_js.png',
       title: 'Javascript',
       subtitle: 'Avanzado'
    },
    {
        image: 'public/assets/icons/piero_cusi_html.png',
        title: 'HTML',
        subtitle: 'Avanzado'
    },
    {
        image: 'public/assets/icons/piero_cusi_css.png',
        title: 'CSS',
        subtitle: 'Avanzado'
    },
    {
        image: 'public/assets/icons/piero_cusi_bootstrap.png',
        title: 'Bootstrap',
        subtitle: 'Avanzado'
    },
    {
        image: 'public/assets/icons/piero_cusi_angular.png',
        title: 'Angular',
        subtitle: 'Intermedio'
    },
    {
        image: 'public/assets/icons/piero_cusi_ionic.png',
        title: 'Ionic',
        subtitle: 'Intermedio'
    },
    {
        image: 'public/assets/icons/piero_cusi_node.png',
        title: 'Node.js',
        subtitle: 'Intermedio'
    },
    {
        image: 'public/assets/icons/piero_cusi_git.png',
        title: 'Git',
        subtitle: 'Intermedio'
    },
    {
        image: 'public/assets/icons/piero_cusi_mysql.png',
        title: 'MySQL',
        subtitle: 'Intermedio'
    },
    {
        image: 'public/assets/icons/piero_cusi_mongodb.png',
        title: 'MongoDB',
        subtitle: 'Intermedio'
    },
    {
        image: 'public/assets/icons/piero_cusi_php.png',
        title: 'PHP',
        subtitle: 'Básico'
    },
    {
        image: 'public/assets/icons/piero_cusi_flutter.png',
        title: 'Flutter',
        subtitle: 'Básico'
    }
]

function printTechs() {
    items.innerHTML = `
        ${techs.map((item) => `
              <div class="tech__card">
                  <div class="tech__card__body">
                    <img src="${item.image}" class="tech__card__icon" alt="Piero Cusi Habilidades">
                        <div class="tech__card__content">
                            <h4 class="card__title">${item.title}</h4>
                            <h4 class="card__subtitle">${item.subtitle}</h4>
                        </div>
                 </div>
              </div>
        `
        ).join('')}
    `;
    return techFirst.append(items);
}

printTechs();
