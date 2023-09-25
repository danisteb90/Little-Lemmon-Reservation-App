import dish1 from '../assets/img/dish-1 1.png';
import dish2 from '../assets/img/dish-2 2.png';
import dish3 from '../assets/img/dish-3 1.png';
import client1 from '../assets/img/client1.jpg';
import client2 from '../assets/img/client2.jpg';
import client3 from '../assets/img/client3.jpg';

const dishes = [
    {
        title: 'Lumpia with Suace',
        text: "Crispy and golden, our Lumpia is a delightful blend of savory fillings wrapped in delicate, paper-thin pastry. Served with a delectable dipping sauce, it's the perfect appetizer to kickstart your culinary journey with us.",
        img: dish1,
    },
    {
        title: 'Tofu Chili',
        text: 'A flavorful fusion of tofu and spicy chili sauce, this dish offers a delightful balance of heat and savory goodness. Savor the rich flavors and textures that make it a vegan favorite at our restaurant.',
        img: dish2,
    },
    {
        title: 'Fish and Veggie',
        text: 'Dive into a symphony of flavors with our perfectly grilled fish, accompanied by a medley of fresh, seasonal vegetables. This dish embodies the essence of healthy and delicious dining at our restaurant.',
        img: dish3,
    }
    
]

export default dishes;

export const clients = [
    {
        id: 1,
        name: 'John Doe',
        image: client1,
        content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac urna rutrum, dapibus massa eu, pharetra erat. Vestibulum aliquet ex velit, eget ultricies elit varius nec. Mauris eu fringilla eros. Fusce eu odio dui. Phasellus sodales aliquet orci sit amet pellentesque. Curabitur lacinia, nunc at posuere ultricies."'
    },
    {
        id: 2,
        name: 'Jennie Nichols',
        image: client2,
        content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac urna rutrum, dapibus massa eu, pharetra erat. Vestibulum aliquet ex velit, eget ultricies elit varius nec. Mauris eu fringilla eros. Fusce eu odio dui. Phasellus sodales aliquet orci sit amet pellentesque. Curabitur lacinia, nunc at posuere ultricies."'
    },
    {
        id: 3,
        name: 'Eric Dagsland',
        image: client3,
        content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac urna rutrum, dapibus massa eu, pharetra erat. Vestibulum aliquet ex velit, eget ultricies elit varius nec. Mauris eu fringilla eros. Fusce eu odio dui. Phasellus sodales aliquet orci sit amet pellentesque. Curabitur lacinia, nunc at posuere ultricies."'
    }
]