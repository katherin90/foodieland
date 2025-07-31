import { Categories } from "../categories/categories-data"

export type RecipeType = {
    slug: string,
    title: string
    description: string
    img: string
    author: string
    authorImg: string
    date: string
    prepTime: number
    cookTime: number
    category: Categories
    nutrition: {name: string, value: string}[]
    ingredients: {title: string, items: string[]}[]
    steps: {title: string, text: string}[]
}
export const RECIPES: RecipeType[] = [
    {
        slug: 'Spicy_delicious_chicken_wings',
        title: 'Spicy delicious chicken wings',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam fuga nihil dolores repudiandae expedita corrupti aspernatur dignissimos, numquam praesentium. Quibusdam asperiores architecto ab quas impedit, quis id corrupti tenetur cumque qui temporibus laudantium illo consequatur totam repudiandae delectus, repellendus ducimus officiis necessitatibus assumenda voluptate? Aliquam animi nulla aperiam. Sit, veritatis.',
        img: '/images/recipes/recipes-img1.jpg',
        author: 'John Smith',
        authorImg: '/images/author-photo.jpg',
        date: '15 March 2022',
        prepTime: 15,
        cookTime: 15,
        category: Categories.MEAT,
        nutrition: [
            {
                name: 'Calories',
                value: '219.9 kcal'
            },
            {
                name: 'Total Fat',
                value: '10.7 g'
            },
            {
                name: 'Protein',
                value: '7.9 g'
            },
            {
                name: 'Carbohydrate',
                value: '22.3 g'
            },
            {
                name: 'Cholesterol',
                value: '37.4 mg'
            }
        ],
        ingredients: [
            {
                title: 'For main dish',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            }
        ],
        steps: [
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p><img src="/images/img-on-recipe.jpg"/><p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            
        ]
        
    },
    {
        slug: 'Big_and_Juicy_Wagyu_Beef_Cheeseburger',
        title: 'Big and Juicy Wagyu Beef Cheeseburger',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam fuga nihil dolores repudiandae expedita corrupti aspernatur dignissimos, numquam praesentium. Quibusdam asperiores architecto ab quas impedit, quis id corrupti tenetur cumque qui temporibus laudantium illo consequatur totam repudiandae delectus, repellendus ducimus officiis necessitatibus assumenda voluptate? Aliquam animi nulla aperiam. Sit, veritatis.',
        img: '/images/recipes/recipes-img2.jpg',
        author: 'John Smith',
        authorImg: '/images/author-photo.jpg',
        date: '15 March 2022',
        prepTime: 15,
        cookTime: 15,
        category: Categories.SNACK,
        nutrition: [
            {
                name: 'Calories',
                value: '219.9 kcal'
            },
            {
                name: 'Total Fat',
                value: '10.7 g'
            },
            {
                name: 'Protein',
                value: '7.9 g'
            },
            {
                name: 'Carbohydrate',
                value: '22.3 g'
            },
            {
                name: 'Cholesterol',
                value: '37.4 mg'
            }
        ],
        ingredients: [
            {
                title: 'For main dish',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            }
        ],
        steps: [
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p><img src="/images/img-on-recipe.jpg"/><p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            
        ]
        
    },
    {
        slug: 'Fresh_Lime_Roasted_Salmon_with_Ginger_Sauce',
        title: 'Fresh Lime Roasted Salmon with Ginger Sauce',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam fuga nihil dolores repudiandae expedita corrupti aspernatur dignissimos, numquam praesentium. Quibusdam asperiores architecto ab quas impedit, quis id corrupti tenetur cumque qui temporibus laudantium illo consequatur totam repudiandae delectus, repellendus ducimus officiis necessitatibus assumenda voluptate? Aliquam animi nulla aperiam. Sit, veritatis.',
        img: '/images/recipes/recipes-img3.jpg',
        author: 'John Smith',
        authorImg: '/images/author-photo.jpg',
        date: '15 March 2022',
        prepTime: 10,
        cookTime: 30,
        category: Categories.FISH,
        nutrition: [
            {
                name: 'Calories',
                value: '219.9 kcal'
            },
            {
                name: 'Total Fat',
                value: '10.7 g'
            },
            {
                name: 'Protein',
                value: '7.9 g'
            },
            {
                name: 'Carbohydrate',
                value: '22.3 g'
            },
            {
                name: 'Cholesterol',
                value: '37.4 mg'
            }
        ],
        ingredients: [
            {
                title: 'For main dish',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            },
            {
                title: 'For the sauce',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            }

        ],
        steps: [
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p><p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
        ]
        
    },
    {
        slug: 'Strawberry_Oatmeal_Pancake_with_Honey_Syrup',
        title: 'Strawberry Oatmeal Pancake with Honey Syrup',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam fuga nihil dolores repudiandae expedita corrupti aspernatur dignissimos, numquam praesentium. Quibusdam asperiores architecto ab quas impedit, quis id corrupti tenetur cumque qui temporibus laudantium illo consequatur totam repudiandae delectus, repellendus ducimus officiis necessitatibus assumenda voluptate? Aliquam animi nulla aperiam. Sit, veritatis.',
        img: '/images/recipes/recipes-img4.jpg',
        author: 'John Smith',
        authorImg: '/images/author-photo.jpg',
        date: '15 March 2022',
        prepTime: 15,
        cookTime: 15,
        category: Categories.BREAKFAST,
        nutrition: [
            {
                name: 'Calories',
                value: '219.9 kcal'
            },
            {
                name: 'Total Fat',
                value: '10.7 g'
            },
            {
                name: 'Protein',
                value: '7.9 g'
            },
            {
                name: 'Carbohydrate',
                value: '22.3 g'
            },
            {
                name: 'Cholesterol',
                value: '37.4 mg'
            }
        ],
        ingredients: [
            {
                title: 'For main dish',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            }
        ],
        steps: [
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p><p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
        ]
        
    },
    {
        slug: 'Fresh_and_Healthy_Mixed_Mayonnaise_Salad',
        title: 'Fresh and Healthy Mixed Mayonnaise Salad',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam fuga nihil dolores repudiandae expedita corrupti aspernatur dignissimos, numquam praesentium. Quibusdam asperiores architecto ab quas impedit, quis id corrupti tenetur cumque qui temporibus laudantium illo consequatur totam repudiandae delectus, repellendus ducimus officiis necessitatibus assumenda voluptate? Aliquam animi nulla aperiam. Sit, veritatis.',
        img: '/images/recipes/recipes-img5.jpg',
        author: 'John Smith',
        authorImg: '/images/author-photo.jpg',
        date: '15 March 2022',
        prepTime: 15,
        cookTime: 15,
        category: Categories.HEALTHY,
        nutrition: [
            {
                name: 'Calories',
                value: '219.9 kcal'
            },
            {
                name: 'Total Fat',
                value: '10.7 g'
            },
            {
                name: 'Protein',
                value: '7.9 g'
            },
            {
                name: 'Carbohydrate',
                value: '22.3 g'
            },
            {
                name: 'Cholesterol',
                value: '37.4 mg'
            }
        ],
        ingredients: [
            {
                title: 'For main dish',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            },
            {
                title: 'For the sauce',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            }

        ],
        steps: [
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p><img src="/images/img-on-recipe.jpg"/><p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
        ]
        
    },
    {
        slug: 'Chicken_Meatballs_with_Cream_Cheese',
        title: 'Chicken Meatballs with Cream Cheese',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam fuga nihil dolores repudiandae expedita corrupti aspernatur dignissimos, numquam praesentium. Quibusdam asperiores architecto ab quas impedit, quis id corrupti tenetur cumque qui temporibus laudantium illo consequatur totam repudiandae delectus, repellendus ducimus officiis necessitatibus assumenda voluptate? Aliquam animi nulla aperiam. Sit, veritatis.',
        img: '/images/recipes/recipes-img6.jpg',
        author: 'John Smith',
        authorImg: '/images/author-photo.jpg',
        date: '15 March 2022',
        prepTime: 10,
        cookTime: 15,
        category: Categories.MEAT,
        nutrition: [
            {
                name: 'Calories',
                value: '219.9 kcal'
            },
            {
                name: 'Total Fat',
                value: '10.7 g'
            },
            {
                name: 'Protein',
                value: '7.9 g'
            },
            {
                name: 'Carbohydrate',
                value: '22.3 g'
            },
            {
                name: 'Cholesterol',
                value: '37.4 mg'
            }
        ],
        ingredients: [
            {
                title: 'For main dish',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            },
        ],
        steps: [
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p><img src="/images/img-on-recipe.jpg"/><p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
        ]
        
    },
    {
        slug: 'Fruity_Pancake_with_Orange_Blueberry',
        title: 'Fruity Pancake with Orange & Blueberry',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam fuga nihil dolores repudiandae expedita corrupti aspernatur dignissimos, numquam praesentium. Quibusdam asperiores architecto ab quas impedit, quis id corrupti tenetur cumque qui temporibus laudantium illo consequatur totam repudiandae delectus, repellendus ducimus officiis necessitatibus assumenda voluptate? Aliquam animi nulla aperiam. Sit, veritatis.',
        img: '/images/recipes/recipes-img7.jpg',
        author: 'John Smith',
        authorImg: '/images/author-photo.jpg',
        date: '15 March 2022',
        prepTime: 15,
        cookTime: 15,
        category: Categories.SWEET,
        nutrition: [
            {
                name: 'Calories',
                value: '219.9 kcal'
            },
            {
                name: 'Total Fat',
                value: '10.7 g'
            },
            {
                name: 'Protein',
                value: '7.9 g'
            },
            {
                name: 'Carbohydrate',
                value: '22.3 g'
            },
            {
                name: 'Cholesterol',
                value: '37.4 mg'
            }
        ],
        ingredients: [
            {
                title: 'For main dish',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            },
            {
                title: 'For the sauce',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            }

        ],
        steps: [
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p><img src="/images/img-on-recipe.jpg"/><p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
        ]
        
    },
    {
        slug: 'The_Best_Easy_One_Pot_Chicken_and_Rice',
        title: 'The Best Easy One Pot Chicken and Rice',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam fuga nihil dolores repudiandae expedita corrupti aspernatur dignissimos, numquam praesentium. Quibusdam asperiores architecto ab quas impedit, quis id corrupti tenetur cumque qui temporibus laudantium illo consequatur totam repudiandae delectus, repellendus ducimus officiis necessitatibus assumenda voluptate? Aliquam animi nulla aperiam. Sit, veritatis.',
        img: '/images/recipes/recipes-img8.jpg',
        author: 'John Smith',
        authorImg: '/images/author-photo.jpg',
        date: '15 March 2022',
        prepTime: 15,
        cookTime: 15,
        category: Categories.HEALTHY,
        nutrition: [
            {
                name: 'Calories',
                value: '219.9 kcal'
            },
            {
                name: 'Total Fat',
                value: '10.7 g'
            },
            {
                name: 'Protein',
                value: '7.9 g'
            },
            {
                name: 'Carbohydrate',
                value: '22.3 g'
            },
            {
                name: 'Cholesterol',
                value: '37.4 mg'
            }
        ],
        ingredients: [
            {
                title: 'For main dish',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            },
            {
                title: 'For the sauce',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            }

        ],
        steps: [
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
        ]
        
    },
    {
        slug: 'The_Creamiest_Creamy_Chicken_and_Bacon_Pasta',
        title: 'The Creamiest Creamy Chicken and Bacon Pasta',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam fuga nihil dolores repudiandae expedita corrupti aspernatur dignissimos, numquam praesentium. Quibusdam asperiores architecto ab quas impedit, quis id corrupti tenetur cumque qui temporibus laudantium illo consequatur totam repudiandae delectus, repellendus ducimus officiis necessitatibus assumenda voluptate? Aliquam animi nulla aperiam. Sit, veritatis.',
        img: '/images/recipes/recipes-img9.jpg',
        author: 'John Smith',
        authorImg: '/images/author-photo.jpg',
        date: '15 March 2022',
        prepTime: 20,
        cookTime: 20,
        category: Categories.NOODLES,
        nutrition: [
            {
                name: 'Calories',
                value: '219.9 kcal'
            },
            {
                name: 'Total Fat',
                value: '10.7 g'
            },
            {
                name: 'Protein',
                value: '7.9 g'
            },
            {
                name: 'Carbohydrate',
                value: '22.3 g'
            },
            {
                name: 'Cholesterol',
                value: '37.4 mg'
            }
        ],
        ingredients: [
            {
                title: 'For main dish',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            },
            {
                title: 'For the sauce',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            }

        ],
        steps: [
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p><img src="/images/img-on-recipe.jpg"/><p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
        ]
        
    },
    {
        slug: 'Mixed_Tropical_Fruit_Salad_with_Superfood_Boosts ',
        title: 'Mixed Tropical Fruit Salad with Superfood Boosts ',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam fuga nihil dolores repudiandae expedita corrupti aspernatur dignissimos, numquam praesentium. Quibusdam asperiores architecto ab quas impedit, quis id corrupti tenetur cumque qui temporibus laudantium illo consequatur totam repudiandae delectus, repellendus ducimus officiis necessitatibus assumenda voluptate? Aliquam animi nulla aperiam. Sit, veritatis.',
        img: '/images/recipes/recipes-img10.jpg',
        author: 'John Smith',
        authorImg: '/images/author-photo.jpg',
        date: '15 March 2022',
        prepTime: 15,
        cookTime: 15,
        category: Categories.HEALTHY,
        nutrition: [
            {
                name: 'Calories',
                value: '219.9 kcal'
            },
            {
                name: 'Total Fat',
                value: '10.7 g'
            },
            {
                name: 'Protein',
                value: '7.9 g'
            },
            {
                name: 'Carbohydrate',
                value: '22.3 g'
            },
            {
                name: 'Cholesterol',
                value: '37.4 mg'
            }
        ],
        ingredients: [
            {
                title: 'For main dish',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            },

        ],
        steps: [
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p><img src="/images/img-on-recipe.jpg"/><p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
        ]
        
    },
    {
        slug: 'Big_and_Juicy_Wagyu_Beef_Cheeseburger',
        title: 'Big and Juicy Wagyu Beef Cheeseburger',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam fuga nihil dolores repudiandae expedita corrupti aspernatur dignissimos, numquam praesentium. Quibusdam asperiores architecto ab quas impedit, quis id corrupti tenetur cumque qui temporibus laudantium illo consequatur totam repudiandae delectus, repellendus ducimus officiis necessitatibus assumenda voluptate? Aliquam animi nulla aperiam. Sit, veritatis.',
        img: '/images/recipes/recipes-img11.jpg',
        author: 'John Smith',
        authorImg: '/images/author-photo.jpg',
        date: '15 March 2022',
        prepTime: 10,
        cookTime: 30,
        category: Categories.WESTERN,
        nutrition: [
            {
                name: 'Calories',
                value: '219.9 kcal'
            },
            {
                name: 'Total Fat',
                value: '10.7 g'
            },
            {
                name: 'Protein',
                value: '7.9 g'
            },
            {
                name: 'Carbohydrate',
                value: '22.3 g'
            },
            {
                name: 'Cholesterol',
                value: '37.4 mg'
            }
        ],
        ingredients: [
            {
                title: 'For main dish',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            },
            {
                title: 'For the sauce',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            }

        ],
        steps: [
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p><p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
        ]
        
    },
    {
        slug: 'Healthy_Japanese_Fried_Rice_with_Asparagus',
        title: 'Healthy Japanese Fried Rice with Asparagus',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam fuga nihil dolores repudiandae expedita corrupti aspernatur dignissimos, numquam praesentium. Quibusdam asperiores architecto ab quas impedit, quis id corrupti tenetur cumque qui temporibus laudantium illo consequatur totam repudiandae delectus, repellendus ducimus officiis necessitatibus assumenda voluptate? Aliquam animi nulla aperiam. Sit, veritatis.',
        img: '/images/recipes/recipes-img12.jpg',
        author: 'John Smith',
        authorImg: '/images/author-photo.jpg',
        date: '15 March 2022',
        prepTime: 10,
        cookTime: 25,
        category: Categories.HEALTHY,
        nutrition: [
            {
                name: 'Calories',
                value: '219.9 kcal'
            },
            {
                name: 'Total Fat',
                value: '10.7 g'
            },
            {
                name: 'Protein',
                value: '7.9 g'
            },
            {
                name: 'Carbohydrate',
                value: '22.3 g'
            },
            {
                name: 'Cholesterol',
                value: '37.4 mg'
            }
        ],
        ingredients: [
            {
                title: 'For main dish',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            },
            {
                title: 'For the sauce',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            }

        ],
        steps: [
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p><img src="/images/img-on-recipe.jpg"/><p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
        ]
        
    },
    {
        slug: 'Cauliflower_Walnut_Vegetarian_Taco_Meat',
        title: 'Cauliflower Walnut Vegetarian Taco Meat',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam fuga nihil dolores repudiandae expedita corrupti aspernatur dignissimos, numquam praesentium. Quibusdam asperiores architecto ab quas impedit, quis id corrupti tenetur cumque qui temporibus laudantium illo consequatur totam repudiandae delectus, repellendus ducimus officiis necessitatibus assumenda voluptate? Aliquam animi nulla aperiam. Sit, veritatis.',
        img: '/images/recipes/recipes-img13.jpg',
        author: 'John Smith',
        authorImg: '/images/author-photo.jpg',
        date: '15 March 2022',
        prepTime: 15,
        cookTime: 15,
        category: Categories.EASTERN,
        nutrition: [
            {
                name: 'Calories',
                value: '219.9 kcal'
            },
            {
                name: 'Total Fat',
                value: '10.7 g'
            },
            {
                name: 'Protein',
                value: '7.9 g'
            },
            {
                name: 'Carbohydrate',
                value: '22.3 g'
            },
            {
                name: 'Cholesterol',
                value: '37.4 mg'
            }
        ],
        ingredients: [
            {
                title: 'For main dish',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            },
            {
                title: 'For the sauce',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            }

        ],
        steps: [
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p><img src="/images/img-on-recipe.jpg"/><p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
        ]
        
    },
    {
        slug: 'Rainbow_Chicken_Salad_with_Almond_Honey_Mustard_Dressing',
        title: 'Rainbow Chicken Salad with Almond Honey Mustard Dressing',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam fuga nihil dolores repudiandae expedita corrupti aspernatur dignissimos, numquam praesentium. Quibusdam asperiores architecto ab quas impedit, quis id corrupti tenetur cumque qui temporibus laudantium illo consequatur totam repudiandae delectus, repellendus ducimus officiis necessitatibus assumenda voluptate? Aliquam animi nulla aperiam. Sit, veritatis.',
        img: '/images/recipes/recipes-img14.jpg',
        author: 'John Smith',
        authorImg: '/images/author-photo.jpg',
        date: '15 March 2022',
        prepTime: 15,
        cookTime: 15,
        category: Categories.HEALTHY,
        nutrition: [
            {
                name: 'Calories',
                value: '219.9 kcal'
            },
            {
                name: 'Total Fat',
                value: '10.7 g'
            },
            {
                name: 'Protein',
                value: '7.9 g'
            },
            {
                name: 'Carbohydrate',
                value: '22.3 g'
            },
            {
                name: 'Cholesterol',
                value: '37.4 mg'
            }
        ],
        ingredients: [
            {
                title: 'For main dish',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            },
            {
                title: 'For the sauce',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            }

        ],
        steps: [
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p><img src="/images/img-on-recipe.jpg"/><p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
        ]
        
    },
    {
        slug: 'Barbeque_Spicy_Sandwiches_with_Chips ',
        title: 'Barbeque Spicy Sandwiches with Chips ',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam fuga nihil dolores repudiandae expedita corrupti aspernatur dignissimos, numquam praesentium. Quibusdam asperiores architecto ab quas impedit, quis id corrupti tenetur cumque qui temporibus laudantium illo consequatur totam repudiandae delectus, repellendus ducimus officiis necessitatibus assumenda voluptate? Aliquam animi nulla aperiam. Sit, veritatis.',
        img: '/images/recipes/recipes-img15.jpg',
        author: 'John Smith',
        authorImg: '/images/author-photo.jpg',
        date: '15 March 2022',
        prepTime: 5,
        cookTime: 10,
        category: Categories.SNACK,
        nutrition: [
            {
                name: 'Calories',
                value: '219.9 kcal'
            },
            {
                name: 'Total Fat',
                value: '10.7 g'
            },
            {
                name: 'Protein',
                value: '7.9 g'
            },
            {
                name: 'Carbohydrate',
                value: '22.3 g'
            },
            {
                name: 'Cholesterol',
                value: '37.4 mg'
            }
        ],
        ingredients: [
            {
                title: 'For main dish',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            },
            {
                title: 'For the sauce',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            }

        ],
        steps: [
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p><img src="/images/img-on-recipe.jpg"/><p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
        ]
        
    },
    {
        slug: 'Firecracker_Vegan_Lettuce_Wraps_-_Spicy! ',
        title: 'Firecracker Vegan Lettuce Wraps - Spicy! ',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam fuga nihil dolores repudiandae expedita corrupti aspernatur dignissimos, numquam praesentium. Quibusdam asperiores architecto ab quas impedit, quis id corrupti tenetur cumque qui temporibus laudantium illo consequatur totam repudiandae delectus, repellendus ducimus officiis necessitatibus assumenda voluptate? Aliquam animi nulla aperiam. Sit, veritatis.',
        img: '/images/recipes/recipes-img16.jpg',
        author: 'John Smith',
        authorImg: '/images/author-photo.jpg',
        date: '15 March 2022',
        prepTime: 15,
        cookTime: 15,
        category: Categories.SEAFOOD,
        nutrition: [
            {
                name: 'Calories',
                value: '219.9 kcal'
            },
            {
                name: 'Total Fat',
                value: '10.7 g'
            },
            {
                name: 'Protein',
                value: '7.9 g'
            },
            {
                name: 'Carbohydrate',
                value: '22.3 g'
            },
            {
                name: 'Cholesterol',
                value: '37.4 mg'
            }
        ],
        ingredients: [
            {
                title: 'For main dish',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            },
            {
                title: 'For the sauce',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            }

        ],
        steps: [
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p><img src="/images/img-on-recipe.jpg"/><p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
        ]
        
    },
    {
        slug: 'Chicken_Ramen_Soup_with_Mushroom ',
        title: 'Chicken Ramen Soup with Mushroom ',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam fuga nihil dolores repudiandae expedita corrupti aspernatur dignissimos, numquam praesentium. Quibusdam asperiores architecto ab quas impedit, quis id corrupti tenetur cumque qui temporibus laudantium illo consequatur totam repudiandae delectus, repellendus ducimus officiis necessitatibus assumenda voluptate? Aliquam animi nulla aperiam. Sit, veritatis.',
        img: '/images/recipes/recipes-img17.jpg',
        author: 'John Smith',
        authorImg: '/images/author-photo.jpg',
        date: '15 March 2022',
        prepTime: 15,
        cookTime: 15,
        category: Categories.JAPANESE,
        nutrition: [
            {
                name: 'Calories',
                value: '219.9 kcal'
            },
            {
                name: 'Total Fat',
                value: '10.7 g'
            },
            {
                name: 'Protein',
                value: '7.9 g'
            },
            {
                name: 'Carbohydrate',
                value: '22.3 g'
            },
            {
                name: 'Cholesterol',
                value: '37.4 mg'
            }
        ],
        ingredients: [
            {
                title: 'For main dish',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            },
            {
                title: 'For the sauce',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            }

        ],
        steps: [
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p><img src="/images/img-on-recipe.jpg"/><p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
        ]
        
    },
    {
        slug: 'Spaghetti',
        title: 'Spaghetti',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam fuga nihil dolores repudiandae expedita corrupti aspernatur dignissimos, numquam praesentium. Quibusdam asperiores architecto ab quas impedit, quis id corrupti tenetur cumque qui temporibus laudantium illo consequatur totam repudiandae delectus, repellendus ducimus officiis necessitatibus assumenda voluptate? Aliquam animi nulla aperiam. Sit, veritatis.',
        img: '/images/recipes/recipes-img18.jpg',
        author: 'John Smith',
        authorImg: '/images/author-photo.jpg',
        date: '15 March 2022',
        prepTime: 10,
        cookTime: 30,
        category: Categories.MEAT,
        nutrition: [
            {
                name: 'Calories',
                value: '219.9 kcal'
            },
            {
                name: 'Total Fat',
                value: '10.7 g'
            },
            {
                name: 'Protein',
                value: '7.9 g'
            },
            {
                name: 'Carbohydrate',
                value: '22.3 g'
            },
            {
                name: 'Cholesterol',
                value: '37.4 mg'
            }
        ],
        ingredients: [
            {
                title: 'For main dish',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            },
            {
                title: 'For the sauce',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            }

        ],
        steps: [
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p><img src="/images/img-on-recipe.jpg"/><p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
        ]
        
    },
    {
        slug: 'Spicy_delicious_chicken_wings_2',
        title: 'Spicy delicious chicken wings 2',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam fuga nihil dolores repudiandae expedita corrupti aspernatur dignissimos, numquam praesentium. Quibusdam asperiores architecto ab quas impedit, quis id corrupti tenetur cumque qui temporibus laudantium illo consequatur totam repudiandae delectus, repellendus ducimus officiis necessitatibus assumenda voluptate? Aliquam animi nulla aperiam. Sit, veritatis.',
        img: '/images/recipes/recipes-img1.jpg',
        author: 'John Smith',
        authorImg: '/images/author-photo.jpg',
        date: '15 March 2022',
        prepTime: 15,
        cookTime: 15,
        category: Categories.MEAT,
        nutrition: [
            {
                name: 'Calories',
                value: '219.9 kcal'
            },
            {
                name: 'Total Fat',
                value: '10.7 g'
            },
            {
                name: 'Protein',
                value: '7.9 g'
            },
            {
                name: 'Carbohydrate',
                value: '22.3 g'
            },
            {
                name: 'Cholesterol',
                value: '37.4 mg'
            }
        ],
        ingredients: [
            {
                title: 'For main dish',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            }
        ],
        steps: [
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p><img src="/images/img-on-recipe.jpg"/><p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            
        ]
        
    },
    {
        slug: 'Big_and_Juicy_Wagyu_Beef_Cheeseburger_2',
        title: 'Big and Juicy Wagyu Beef Cheeseburger 2',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam fuga nihil dolores repudiandae expedita corrupti aspernatur dignissimos, numquam praesentium. Quibusdam asperiores architecto ab quas impedit, quis id corrupti tenetur cumque qui temporibus laudantium illo consequatur totam repudiandae delectus, repellendus ducimus officiis necessitatibus assumenda voluptate? Aliquam animi nulla aperiam. Sit, veritatis.',
        img: '/images/recipes/recipes-img2.jpg',
        author: 'John Smith',
        authorImg: '/images/author-photo.jpg',
        date: '15 March 2022',
        prepTime: 15,
        cookTime: 15,
        category: Categories.SNACK,
        nutrition: [
            {
                name: 'Calories',
                value: '219.9 kcal'
            },
            {
                name: 'Total Fat',
                value: '10.7 g'
            },
            {
                name: 'Protein',
                value: '7.9 g'
            },
            {
                name: 'Carbohydrate',
                value: '22.3 g'
            },
            {
                name: 'Cholesterol',
                value: '37.4 mg'
            }
        ],
        ingredients: [
            {
                title: 'For main dish',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            }
        ],
        steps: [
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p><img src="/images/img-on-recipe.jpg"/><p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            
        ]
        
    },
    {
        slug: 'Fresh_Lime_Roasted_Salmon_with_Ginger_Sauce_2',
        title: 'Fresh Lime Roasted Salmon with Ginger Sauce 2',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam fuga nihil dolores repudiandae expedita corrupti aspernatur dignissimos, numquam praesentium. Quibusdam asperiores architecto ab quas impedit, quis id corrupti tenetur cumque qui temporibus laudantium illo consequatur totam repudiandae delectus, repellendus ducimus officiis necessitatibus assumenda voluptate? Aliquam animi nulla aperiam. Sit, veritatis.',
        img: '/images/recipes/recipes-img3.jpg',
        author: 'John Smith',
        authorImg: '/images/author-photo.jpg',
        date: '15 March 2022',
        prepTime: 10,
        cookTime: 30,
        category: Categories.FISH,
        nutrition: [
            {
                name: 'Calories',
                value: '219.9 kcal'
            },
            {
                name: 'Total Fat',
                value: '10.7 g'
            },
            {
                name: 'Protein',
                value: '7.9 g'
            },
            {
                name: 'Carbohydrate',
                value: '22.3 g'
            },
            {
                name: 'Cholesterol',
                value: '37.4 mg'
            }
        ],
        ingredients: [
            {
                title: 'For main dish',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            },
            {
                title: 'For the sauce',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            }

        ],
        steps: [
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p><p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
        ]
        
    },
    {
        slug: 'Strawberry_Oatmeal_Pancake_with_Honey_Syrup_2',
        title: 'Strawberry Oatmeal Pancake with Honey Syrup 2',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam fuga nihil dolores repudiandae expedita corrupti aspernatur dignissimos, numquam praesentium. Quibusdam asperiores architecto ab quas impedit, quis id corrupti tenetur cumque qui temporibus laudantium illo consequatur totam repudiandae delectus, repellendus ducimus officiis necessitatibus assumenda voluptate? Aliquam animi nulla aperiam. Sit, veritatis.',
        img: '/images/recipes/recipes-img4.jpg',
        author: 'John Smith',
        authorImg: '/images/author-photo.jpg',
        date: '15 March 2022',
        prepTime: 15,
        cookTime: 15,
        category: Categories.BREAKFAST,
        nutrition: [
            {
                name: 'Calories',
                value: '219.9 kcal'
            },
            {
                name: 'Total Fat',
                value: '10.7 g'
            },
            {
                name: 'Protein',
                value: '7.9 g'
            },
            {
                name: 'Carbohydrate',
                value: '22.3 g'
            },
            {
                name: 'Cholesterol',
                value: '37.4 mg'
            }
        ],
        ingredients: [
            {
                title: 'For main dish',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            }
        ],
        steps: [
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p><p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
        ]
        
    },
    {
        slug: 'Fresh_and_Healthy_Mixed_Mayonnaise_Salad_2',
        title: 'Fresh and Healthy Mixed Mayonnaise Salad 2',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam fuga nihil dolores repudiandae expedita corrupti aspernatur dignissimos, numquam praesentium. Quibusdam asperiores architecto ab quas impedit, quis id corrupti tenetur cumque qui temporibus laudantium illo consequatur totam repudiandae delectus, repellendus ducimus officiis necessitatibus assumenda voluptate? Aliquam animi nulla aperiam. Sit, veritatis.',
        img: '/images/recipes/recipes-img5.jpg',
        author: 'John Smith',
        authorImg: '/images/author-photo.jpg',
        date: '15 March 2022',
        prepTime: 15,
        cookTime: 15,
        category: Categories.HEALTHY,
        nutrition: [
            {
                name: 'Calories',
                value: '219.9 kcal'
            },
            {
                name: 'Total Fat',
                value: '10.7 g'
            },
            {
                name: 'Protein',
                value: '7.9 g'
            },
            {
                name: 'Carbohydrate',
                value: '22.3 g'
            },
            {
                name: 'Cholesterol',
                value: '37.4 mg'
            }
        ],
        ingredients: [
            {
                title: 'For main dish',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            },
            {
                title: 'For the sauce',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            }

        ],
        steps: [
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p><img src="/images/img-on-recipe.jpg"/><p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
        ]
        
    },
    {
        slug: 'Chicken_Meatballs_with_Cream_Cheese_2',
        title: 'Chicken Meatballs with Cream Cheese 2',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam fuga nihil dolores repudiandae expedita corrupti aspernatur dignissimos, numquam praesentium. Quibusdam asperiores architecto ab quas impedit, quis id corrupti tenetur cumque qui temporibus laudantium illo consequatur totam repudiandae delectus, repellendus ducimus officiis necessitatibus assumenda voluptate? Aliquam animi nulla aperiam. Sit, veritatis.',
        img: '/images/recipes/recipes-img6.jpg',
        author: 'John Smith',
        authorImg: '/images/author-photo.jpg',
        date: '15 March 2022',
        prepTime: 10,
        cookTime: 15,
        category: Categories.MEAT,
        nutrition: [
            {
                name: 'Calories',
                value: '219.9 kcal'
            },
            {
                name: 'Total Fat',
                value: '10.7 g'
            },
            {
                name: 'Protein',
                value: '7.9 g'
            },
            {
                name: 'Carbohydrate',
                value: '22.3 g'
            },
            {
                name: 'Cholesterol',
                value: '37.4 mg'
            }
        ],
        ingredients: [
            {
                title: 'For main dish',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            },
        ],
        steps: [
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p><img src="/images/img-on-recipe.jpg"/><p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
        ]
        
    },
    {
        slug: 'Fruity_Pancake_with_Orange_Blueberry_2',
        title: 'Fruity Pancake with Orange & Blueberry 2',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam fuga nihil dolores repudiandae expedita corrupti aspernatur dignissimos, numquam praesentium. Quibusdam asperiores architecto ab quas impedit, quis id corrupti tenetur cumque qui temporibus laudantium illo consequatur totam repudiandae delectus, repellendus ducimus officiis necessitatibus assumenda voluptate? Aliquam animi nulla aperiam. Sit, veritatis.',
        img: '/images/recipes/recipes-img7.jpg',
        author: 'John Smith',
        authorImg: '/images/author-photo.jpg',
        date: '15 March 2022',
        prepTime: 15,
        cookTime: 15,
        category: Categories.SWEET,
        nutrition: [
            {
                name: 'Calories',
                value: '219.9 kcal'
            },
            {
                name: 'Total Fat',
                value: '10.7 g'
            },
            {
                name: 'Protein',
                value: '7.9 g'
            },
            {
                name: 'Carbohydrate',
                value: '22.3 g'
            },
            {
                name: 'Cholesterol',
                value: '37.4 mg'
            }
        ],
        ingredients: [
            {
                title: 'For main dish',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            },
            {
                title: 'For the sauce',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            }

        ],
        steps: [
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p><img src="/images/img-on-recipe.jpg"/><p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
        ]
        
    },
    {
        slug: 'The_Best_Easy_One_Pot_Chicken_and_Rice_2',
        title: 'The Best Easy One Pot Chicken and Rice 2',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam fuga nihil dolores repudiandae expedita corrupti aspernatur dignissimos, numquam praesentium. Quibusdam asperiores architecto ab quas impedit, quis id corrupti tenetur cumque qui temporibus laudantium illo consequatur totam repudiandae delectus, repellendus ducimus officiis necessitatibus assumenda voluptate? Aliquam animi nulla aperiam. Sit, veritatis.',
        img: '/images/recipes/recipes-img8.jpg',
        author: 'John Smith',
        authorImg: '/images/author-photo.jpg',
        date: '15 March 2022',
        prepTime: 15,
        cookTime: 15,
        category: Categories.HEALTHY,
        nutrition: [
            {
                name: 'Calories',
                value: '219.9 kcal'
            },
            {
                name: 'Total Fat',
                value: '10.7 g'
            },
            {
                name: 'Protein',
                value: '7.9 g'
            },
            {
                name: 'Carbohydrate',
                value: '22.3 g'
            },
            {
                name: 'Cholesterol',
                value: '37.4 mg'
            }
        ],
        ingredients: [
            {
                title: 'For main dish',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            },
            {
                title: 'For the sauce',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            }

        ],
        steps: [
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
        ]
        
    },
    {
        slug: 'The_Creamiest_Creamy_Chicken_and_Bacon_Pasta_2',
        title: 'The Creamiest Creamy Chicken and Bacon Pasta 2',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam fuga nihil dolores repudiandae expedita corrupti aspernatur dignissimos, numquam praesentium. Quibusdam asperiores architecto ab quas impedit, quis id corrupti tenetur cumque qui temporibus laudantium illo consequatur totam repudiandae delectus, repellendus ducimus officiis necessitatibus assumenda voluptate? Aliquam animi nulla aperiam. Sit, veritatis.',
        img: '/images/recipes/recipes-img9.jpg',
        author: 'John Smith',
        authorImg: '/images/author-photo.jpg',
        date: '15 March 2022',
        prepTime: 20,
        cookTime: 20,
        category: Categories.NOODLES,
        nutrition: [
            {
                name: 'Calories',
                value: '219.9 kcal'
            },
            {
                name: 'Total Fat',
                value: '10.7 g'
            },
            {
                name: 'Protein',
                value: '7.9 g'
            },
            {
                name: 'Carbohydrate',
                value: '22.3 g'
            },
            {
                name: 'Cholesterol',
                value: '37.4 mg'
            }
        ],
        ingredients: [
            {
                title: 'For main dish',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            },
            {
                title: 'For the sauce',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            }

        ],
        steps: [
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p><img src="/images/img-on-recipe.jpg"/><p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
        ]
        
    },
    {
        slug: 'Mixed_Tropical_Fruit_Salad_with_Superfood_Boosts_2 ',
        title: 'Mixed Tropical Fruit Salad with Superfood Boosts 2',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam fuga nihil dolores repudiandae expedita corrupti aspernatur dignissimos, numquam praesentium. Quibusdam asperiores architecto ab quas impedit, quis id corrupti tenetur cumque qui temporibus laudantium illo consequatur totam repudiandae delectus, repellendus ducimus officiis necessitatibus assumenda voluptate? Aliquam animi nulla aperiam. Sit, veritatis.',
        img: '/images/recipes/recipes-img10.jpg',
        author: 'John Smith',
        authorImg: '/images/author-photo.jpg',
        date: '15 March 2022',
        prepTime: 15,
        cookTime: 15,
        category: Categories.HEALTHY,
        nutrition: [
            {
                name: 'Calories',
                value: '219.9 kcal'
            },
            {
                name: 'Total Fat',
                value: '10.7 g'
            },
            {
                name: 'Protein',
                value: '7.9 g'
            },
            {
                name: 'Carbohydrate',
                value: '22.3 g'
            },
            {
                name: 'Cholesterol',
                value: '37.4 mg'
            }
        ],
        ingredients: [
            {
                title: 'For main dish',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            },

        ],
        steps: [
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p><img src="/images/img-on-recipe.jpg"/><p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
        ]
        
    },
    {
        slug: 'Big_and_Juicy_Wagyu_Beef_Cheeseburger_2',
        title: 'Big and Juicy Wagyu Beef Cheeseburger 2',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam fuga nihil dolores repudiandae expedita corrupti aspernatur dignissimos, numquam praesentium. Quibusdam asperiores architecto ab quas impedit, quis id corrupti tenetur cumque qui temporibus laudantium illo consequatur totam repudiandae delectus, repellendus ducimus officiis necessitatibus assumenda voluptate? Aliquam animi nulla aperiam. Sit, veritatis.',
        img: '/images/recipes/recipes-img11.jpg',
        author: 'John Smith',
        authorImg: '/images/author-photo.jpg',
        date: '15 March 2022',
        prepTime: 10,
        cookTime: 30,
        category: Categories.WESTERN,
        nutrition: [
            {
                name: 'Calories',
                value: '219.9 kcal'
            },
            {
                name: 'Total Fat',
                value: '10.7 g'
            },
            {
                name: 'Protein',
                value: '7.9 g'
            },
            {
                name: 'Carbohydrate',
                value: '22.3 g'
            },
            {
                name: 'Cholesterol',
                value: '37.4 mg'
            }
        ],
        ingredients: [
            {
                title: 'For main dish',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            },
            {
                title: 'For the sauce',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            }

        ],
        steps: [
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p><p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
        ]
        
    },
    {
        slug: 'Healthy_Japanese_Fried_Rice_with_Asparagus_2',
        title: 'Healthy Japanese Fried Rice with Asparagus 2',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam fuga nihil dolores repudiandae expedita corrupti aspernatur dignissimos, numquam praesentium. Quibusdam asperiores architecto ab quas impedit, quis id corrupti tenetur cumque qui temporibus laudantium illo consequatur totam repudiandae delectus, repellendus ducimus officiis necessitatibus assumenda voluptate? Aliquam animi nulla aperiam. Sit, veritatis.',
        img: '/images/recipes/recipes-img12.jpg',
        author: 'John Smith',
        authorImg: '/images/author-photo.jpg',
        date: '15 March 2022',
        prepTime: 10,
        cookTime: 25,
        category: Categories.HEALTHY,
        nutrition: [
            {
                name: 'Calories',
                value: '219.9 kcal'
            },
            {
                name: 'Total Fat',
                value: '10.7 g'
            },
            {
                name: 'Protein',
                value: '7.9 g'
            },
            {
                name: 'Carbohydrate',
                value: '22.3 g'
            },
            {
                name: 'Cholesterol',
                value: '37.4 mg'
            }
        ],
        ingredients: [
            {
                title: 'For main dish',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            },
            {
                title: 'For the sauce',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            }

        ],
        steps: [
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p><img src="/images/img-on-recipe.jpg"/><p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
        ]
        
    },
    {
        slug: 'Cauliflower_Walnut_Vegetarian_Taco_Meat_2',
        title: 'Cauliflower Walnut Vegetarian Taco Meat 2',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam fuga nihil dolores repudiandae expedita corrupti aspernatur dignissimos, numquam praesentium. Quibusdam asperiores architecto ab quas impedit, quis id corrupti tenetur cumque qui temporibus laudantium illo consequatur totam repudiandae delectus, repellendus ducimus officiis necessitatibus assumenda voluptate? Aliquam animi nulla aperiam. Sit, veritatis.',
        img: '/images/recipes/recipes-img13.jpg',
        author: 'John Smith',
        authorImg: '/images/author-photo.jpg',
        date: '15 March 2022',
        prepTime: 15,
        cookTime: 15,
        category: Categories.EASTERN,
        nutrition: [
            {
                name: 'Calories',
                value: '219.9 kcal'
            },
            {
                name: 'Total Fat',
                value: '10.7 g'
            },
            {
                name: 'Protein',
                value: '7.9 g'
            },
            {
                name: 'Carbohydrate',
                value: '22.3 g'
            },
            {
                name: 'Cholesterol',
                value: '37.4 mg'
            }
        ],
        ingredients: [
            {
                title: 'For main dish',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            },
            {
                title: 'For the sauce',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            }

        ],
        steps: [
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p><img src="/images/img-on-recipe.jpg"/><p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
        ]
        
    },
    {
        slug: 'Rainbow_Chicken_Salad_with_Almond_Honey_Mustard_Dressing_2',
        title: 'Rainbow Chicken Salad with Almond Honey Mustard Dressing 2',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam fuga nihil dolores repudiandae expedita corrupti aspernatur dignissimos, numquam praesentium. Quibusdam asperiores architecto ab quas impedit, quis id corrupti tenetur cumque qui temporibus laudantium illo consequatur totam repudiandae delectus, repellendus ducimus officiis necessitatibus assumenda voluptate? Aliquam animi nulla aperiam. Sit, veritatis.',
        img: '/images/recipes/recipes-img14.jpg',
        author: 'John Smith',
        authorImg: '/images/author-photo.jpg',
        date: '15 March 2022',
        prepTime: 15,
        cookTime: 15,
        category: Categories.HEALTHY,
        nutrition: [
            {
                name: 'Calories',
                value: '219.9 kcal'
            },
            {
                name: 'Total Fat',
                value: '10.7 g'
            },
            {
                name: 'Protein',
                value: '7.9 g'
            },
            {
                name: 'Carbohydrate',
                value: '22.3 g'
            },
            {
                name: 'Cholesterol',
                value: '37.4 mg'
            }
        ],
        ingredients: [
            {
                title: 'For main dish',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            },
            {
                title: 'For the sauce',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            }

        ],
        steps: [
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p><img src="/images/img-on-recipe.jpg"/><p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
        ]
        
    },
    {
        slug: 'Barbeque_Spicy_Sandwiches_with_Chips_2',
        title: 'Barbeque Spicy Sandwiches with Chips 2',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam fuga nihil dolores repudiandae expedita corrupti aspernatur dignissimos, numquam praesentium. Quibusdam asperiores architecto ab quas impedit, quis id corrupti tenetur cumque qui temporibus laudantium illo consequatur totam repudiandae delectus, repellendus ducimus officiis necessitatibus assumenda voluptate? Aliquam animi nulla aperiam. Sit, veritatis.',
        img: '/images/recipes/recipes-img15.jpg',
        author: 'John Smith',
        authorImg: '/images/author-photo.jpg',
        date: '15 March 2022',
        prepTime: 5,
        cookTime: 10,
        category: Categories.SNACK,
        nutrition: [
            {
                name: 'Calories',
                value: '219.9 kcal'
            },
            {
                name: 'Total Fat',
                value: '10.7 g'
            },
            {
                name: 'Protein',
                value: '7.9 g'
            },
            {
                name: 'Carbohydrate',
                value: '22.3 g'
            },
            {
                name: 'Cholesterol',
                value: '37.4 mg'
            }
        ],
        ingredients: [
            {
                title: 'For main dish',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            },
            {
                title: 'For the sauce',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            }

        ],
        steps: [
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p><img src="/images/img-on-recipe.jpg"/><p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
        ]
        
    },
    {
        slug: 'Firecracker_Vegan_Lettuce_Wraps_-_Spicy_2',
        title: 'Firecracker Vegan Lettuce Wraps - Spicy 2',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam fuga nihil dolores repudiandae expedita corrupti aspernatur dignissimos, numquam praesentium. Quibusdam asperiores architecto ab quas impedit, quis id corrupti tenetur cumque qui temporibus laudantium illo consequatur totam repudiandae delectus, repellendus ducimus officiis necessitatibus assumenda voluptate? Aliquam animi nulla aperiam. Sit, veritatis.',
        img: '/images/recipes/recipes-img16.jpg',
        author: 'John Smith',
        authorImg: '/images/author-photo.jpg',
        date: '15 March 2022',
        prepTime: 15,
        cookTime: 15,
        category: Categories.SEAFOOD,
        nutrition: [
            {
                name: 'Calories',
                value: '219.9 kcal'
            },
            {
                name: 'Total Fat',
                value: '10.7 g'
            },
            {
                name: 'Protein',
                value: '7.9 g'
            },
            {
                name: 'Carbohydrate',
                value: '22.3 g'
            },
            {
                name: 'Cholesterol',
                value: '37.4 mg'
            }
        ],
        ingredients: [
            {
                title: 'For main dish',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            },
            {
                title: 'For the sauce',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            }

        ],
        steps: [
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p><img src="/images/img-on-recipe.jpg"/><p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
        ]
        
    },
    {
        slug: 'Chicken_Ramen_Soup_with_Mushroom_2',
        title: 'Chicken Ramen Soup with Mushroom 2',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam fuga nihil dolores repudiandae expedita corrupti aspernatur dignissimos, numquam praesentium. Quibusdam asperiores architecto ab quas impedit, quis id corrupti tenetur cumque qui temporibus laudantium illo consequatur totam repudiandae delectus, repellendus ducimus officiis necessitatibus assumenda voluptate? Aliquam animi nulla aperiam. Sit, veritatis.',
        img: '/images/recipes/recipes-img17.jpg',
        author: 'John Smith',
        authorImg: '/images/author-photo.jpg',
        date: '15 March 2022',
        prepTime: 15,
        cookTime: 15,
        category: Categories.JAPANESE,
        nutrition: [
            {
                name: 'Calories',
                value: '219.9 kcal'
            },
            {
                name: 'Total Fat',
                value: '10.7 g'
            },
            {
                name: 'Protein',
                value: '7.9 g'
            },
            {
                name: 'Carbohydrate',
                value: '22.3 g'
            },
            {
                name: 'Cholesterol',
                value: '37.4 mg'
            }
        ],
        ingredients: [
            {
                title: 'For main dish',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            },
            {
                title: 'For the sauce',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            }

        ],
        steps: [
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p><img src="/images/img-on-recipe.jpg"/><p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
        ]
        
    },
    {
        slug: 'Spaghetti_2',
        title: 'Spaghetti 2',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam fuga nihil dolores repudiandae expedita corrupti aspernatur dignissimos, numquam praesentium. Quibusdam asperiores architecto ab quas impedit, quis id corrupti tenetur cumque qui temporibus laudantium illo consequatur totam repudiandae delectus, repellendus ducimus officiis necessitatibus assumenda voluptate? Aliquam animi nulla aperiam. Sit, veritatis.',
        img: '/images/recipes/recipes-img18.jpg',
        author: 'John Smith',
        authorImg: '/images/author-photo.jpg',
        date: '15 March 2022',
        prepTime: 10,
        cookTime: 30,
        category: Categories.MEAT,
        nutrition: [
            {
                name: 'Calories',
                value: '219.9 kcal'
            },
            {
                name: 'Total Fat',
                value: '10.7 g'
            },
            {
                name: 'Protein',
                value: '7.9 g'
            },
            {
                name: 'Carbohydrate',
                value: '22.3 g'
            },
            {
                name: 'Cholesterol',
                value: '37.4 mg'
            }
        ],
        ingredients: [
            {
                title: 'For main dish',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            },
            {
                title: 'For the sauce',
                items: ['Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet']
            }

        ],
        steps: [
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p><img src="/images/img-on-recipe.jpg"/><p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
            {
                title: 'Lorem ipsum dolor sit amet',
                text: '<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>'
            },
        ]
        
    },

]