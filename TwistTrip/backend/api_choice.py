from flask import Flask
from flask_restful import Resource, Api
import pandas as pd
import json

app = Flask(__name__)
api = Api(app)

Id = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

Country = ['Corée du Nord',
            'Ukraine', 
            'Ukraine', 
            'Islande', 
            'Émirats arabes unis', 
            'États-Unis', 
            'Canada', 
            'Chine', 
            'Algérie', 
            'Vietnam', 
            'Chili', 
            'Inde', 
            'Turquie', 
            'pays avec un phare', 
            'Inde', 
            'Somalie']

Place = ['Pyongyang', 
         'Kiev', 
         'Tchernobyl', 
         'Reykjavík', 
         'Dubaï', 
         'Las Vegas', 
         'Montréal', 
         'Hangzhou', 
         'Sahara', 
         'Mu Cang Chai', 
         'désert d\'Atacama', 
         'Varanasi', 
         'Prison random', 
         'Phare random', 
         'Dharamsala', 
         'Somalie']

Activity = ['Découverte du régime populaire', 
            'Rave party', 
            'Visite de Tchernobyl, avec son charme underground', 
            'Visite du musée phallologique', 
            'Aide à l\'arrosage des gazons du terrain de golf', 
            'Serveur buffet à volonté', 
            'Aide à domicile chez une personne âgée', 
            'Construction de bâtiments en Chine', 
            'Trekking dans le désert', 
            'Travail dans une rizière', 
            'Chasse au trésors dans une décharge à ciel ouvert', 
            'Nettoyage du Gange', 
            'Méditation dans une prison troglodyte', 
            'Vacances au calme dans un phare', 
            'Séjour dans un temple bouddhiste', 
            'Vie ta vie de pirate en Somalie']

Price = [3000, 
         1000, 
         1000, 
         2000, 
         2000, 
         3000, 
         1000, 
         3000, 
         1000, 
         2000, 
         2000, 
         3000, 
         1000, 
         3000, 
         2000, 
         1000]

Accomodation = ['Hotel', 
                'Hotel', 
                'Hotel', 
                'Hotel', 
                'Hotel', 
                'Hotel', 
                'Chez l\'habitant', 
                'Hotel', 
                'Tente', 
                'Chez l\'habitant', 
                'Tente', 
                'Hotel', 
                'Prison', 
                'Hotel', 
                'Temple', 
                'Bateau']

Choice = ['Culturel', 'Culturel', 'Culturel', 'Culturel', 
          'Humanitaire', 'Humanitaire', 'Humanitaire', 'Humanitaire', 
          'Aventure', 'Aventure', 'Aventure', 'Aventure', 
          'Se ressourcer', 'Se ressourcer', 'Se ressourcer', 'Se ressourcer']

Image = ['/src/assets/images/north-korea.png', 
         '/src/assets/images/tchernobyl.png', 
         '/src/assets/images/tchernobyl.png', 
         '/src/assets/images/phallus.png', 
         '/src/assets/images/golf.png', 
         '/src/assets/images/restaurant.png', 
         '/src/assets/images/canada.webp', 
         '/src/assets/images/building.jpeg', 
         '/src/assets/images/desert.png', 
         '/src/assets/images/rice.jpg', 
         '/src/assets/images/mexico.png', 
         '/src/assets/images/india.jpg', 
         '/src/assets/images/prison.png', 
         '/src/assets/images/phare.jpg', 
         '/src/assets/images/bouddhism.png', 
         '/src/assets/images/somalia.png']

dict = {'Id': Id,
        'Country': Country,
        'Place': Place,
        'Activity': Activity,
        'Price': Price,
        'Accommodation': Accomodation,
        'Choice': Choice,
        'Image': Image
       }


df = pd.DataFrame(dict)

class my_API_class(Resource):
    def get(self, price, choice):
        destination = df.loc[(df['Price'] == int(price)) & (df['Choice'] == choice)].sort_values(by = 'Price', ascending = False).sample()
        destination = json.loads(destination.to_json(orient = 'records'))
        return destination

api.add_resource(my_API_class, '/<string:price>/<string:choice>')

if __name__ == '__main__':
    app.run(debug=True)