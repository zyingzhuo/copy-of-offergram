
from app.models import db, Product

def seed_products():
    product1 = Product(
        sellerId=1,
        name='West Elm Andes 2-Piece Sectional',
        image='https://thumbor.offerup.com/2-3ntzgh32BRSzO9YWyUfTaXVGU=/1125x1893/139c/139c895b06594702ba62a0bc33f2ebe8.jpg',
        location='Los Angeles',
        description='For Sale: West Elm Andes 2-Piece Terminal Chaise Sectional. When standing in front of the couch facing the couch it is a left side chaise 2-piece sectional. Detailed measurements in photos. Couch is in excellent condition, smoke free home. Covers have all been washed this week. This couch is still available at West Elm for $3k+. Only selling because we went with a different style. Cannot deliver, it’s a long couch so you will need a truck. Cash or Venmo only. Thank you.',
        price=1500,
        category='Home & Garden',
        lat='34.398745',
        lng='-118.887739'

    )

    product2= Product(
        sellerId=1,
        name='Stanton 376 Sectional',
        image='https://thumbor.offerup.com/pBwq29CHM1ok8av0b-VJq1IL2xs=/1922x1442/0f5d/0f5d5d7b1eb3468bb09de5ec46aea4f9.jpg',
        location='Los Angeles',
        description='Stanton 376 sectional in like-new condition.',
        price=3000,
        category='Home & Garden',
        lat='34.15666',
        lng='-119.09875'
    )

    product3= Product(
        sellerId=1,
        name='Macy’s Couch Set',
        image='https://thumbor.offerup.com/1eRioWA075axbKrm5aOcT4tetD0=/1988x1284/6eaf/6eaf5bcdd40a4b71b5e8cc3e0caf0b7f.jpg',
        location='Los Angeles',
        description='Selling 3 year old Macy’s beige love seat and navy couch.Great condition, no rips, tears, or stains.Bought for $1617 back in 2018 and can provide proof of purchase. Selling both for $850 OBO.',
        price=850,
        category='Home & Garden',
        lat='34.186578',
        lng='-118.56514'

    )

    product4= Product(
        sellerId=1,
        name='Restoration Hardware Cloud Couch',
        image='https://thumbor.offerup.com/BeNiotU_VgsGmidNQhjN4C0vULM=/1920x1920/aeb5/aeb509a05a094a0fac61fca58fea8604.jpg',
        location='Los Angeles',
        description='RH couch',
        price=1700,
        category='Home & Garden',
        lat='34.1536',
        lng='-118.47153'
    )

    product5= Product(
        sellerId=2,
        name='BRAND NEW SEALED AIRPODS PRO $100',
        image='https://thumbor.offerup.com/2-5LE981Nqbv2Xjk2enzs6iBsRo=/764x1019/0c95/0c95346bccaf4ae6a9942e32a90026a2.jpg',
        location='New York City',
        description='Brand new sealed Airpod Pros!!!,You can run the serial number through the apple website to verify the authenticity👍🏻.Got these as a gift',
        price=100,
        category='Electronics & Media',
        lat='40.6872',
        lng='-73.9417'
    )

    product6= Product(
        sellerId=2,
        name='Macbook Pro 13 inches M1 Chip New store warranty 512 gb ssd 8 gb ram under apple warranty $80 Dollars Down payment',
        image='https://thumbor.offerup.com/AEBy0x5bfIFg6VmsroEb3vqL9So=/495x780/de2a/de2a084de22740cdb4a5322d50399dcd.jpg',
        location='New York City',
        description='"Macbook Pro 13 inches M1 Chip New store warranty 512 gb ssd 8 gb ram under apple warranty only $1299.1610 E Charleston suite 110 Las Vegas Nv 89104 📞CALL_US NOW 📞 ☎️ (702x861x9195) ☎️',
        price=1399,
        category='Electronics & Media',
        lat='40.776',
        lng='-73.95563'

    )

    product7= Product(
        sellerId=2,
        name='iPhone 11',
        image='https://thumbor.offerup.com/FFOqi8Am1dRlZGqKVVoj50Ex0Yo=/2048x2048/50b9/50b955793f9d43f29ef8126f790a2c70.jpg',
        location='New York City',
        description='iPhone 11 for T-Mobile.In great condition.Red and purple',
        price=460,
        category='Electronics & Media',
        lat='40.7425',
        lng='-73.99363'
        
    )

    product8= Product(
        sellerId=2,
        name='playstation 5',
        image='https://thumbor.offerup.com/encT_sGbX5AXV2FOD6nMs0JUx10=/1440x1920/983d/983dea50ae204045aaf0c0fec820c054.jpg',
        location='New York City',
        description='PlayStation 5 Disk,Brand New Just arrived from Walmart w/ receipts',
        price=800,
        category='Electronics & Media',
        lat='40.78998',
        lng='-73.973'
    )

    product9= Product(
        sellerId=3,
        name='Yeezys Boost 350 V2 Light',
        image='https://thumbor.offerup.com/oabcdwU9ww3200IEWbFXbTuIXR8=/2048x1536/45d1/45d1d149a9594fefb12a56028dc508a6.jpg',
        location='Los Angeles',
        description='Yeezys Boost 350 V2 Light never been used fresh out the box !! Receipt included no trades!!!',
        price=350,
        category='Clothing,Shoes,& Accessories',
        lat='34.096716',
        lng='-118.349326'

    )

    product10=Product(
        sellerId=3,
        name='Beach Bags Purse Hobo Styles',
        image='https://thumbor.offerup.com/rpyfD3XvwjFDnZSVka17NhcP_HA=/663x793/1168/116887f2bf74456dab0c18e452f3f49a.jpg',
        location='Los Angeles',
        description='This is a shipping only product. no meet up',
        price=80,
        category='Clothing,Shoes,& Accessories',
        lat='34.05937',
        lng='-118.2832823'

    )

    product11= Product(
        sellerId=3,
        name='Nike Air Jordan Retro 1 Mocha Size 8.5 DS',
        image='https://thumbor.offerup.com/lcw9orngU3MLqQ3N7qX47tv5DIY=/1918x1438/468f/468fcc1f4ff34496b7f0669a34d3ba02.jpg',
        location='Los Angeles',
        description='Looking to swap for same shoe and condition in a 9.5',
        price=590,
        category='Clothing,Shoes,& Accessories',
        lat='33.9816812',
        lng='-118.2250725'
    )

    product12= Product(
        sellerId=3,
        name='Air Jordan 1 Mid Dutch Green Mens Size 8 (Womens Size 9.5) DEADSTOCK',
        image='https://thumbor.offerup.com/qSEnmUgQyug6epN_SgD8C8tfteA=/1080x780/6bf4/6bf4e1e14c374ac5ba5f2023a69e30ce.jpg',
        location='Los Angeles',
        description='Deadstock With Receipt',
        price=400,
        category='Clothing,Shoes,& Accessories',
        lat='34.20869',
        lng='-118.31049'
    )

    product13= Product(
        sellerId=4,
        name='Pottery Barn 20x20 Set Of 2 Pillow Covers',
        image='https://thumbor.offerup.com/xgBBzBLeO9GfapjgA3OZabv11nU=/1800x2082/85da/85da200aecc74129b4c6c16e3942aec7.jpg',
        location='New York City',
        description='In excellent condition. Never used set of two Pottery Barn pillow covers.',
        price=40,
        category='Home & Garden',
        lat='40.7584906',
        lng='-73.96348'
    )

    product14= Product(
        sellerId=4,
        name='Nintendo Switch',
        image='https://thumbor.offerup.com/zTPLuLMbMy7QqwKtEBlXw-r84T8=/612x612/edfc/edfc9efbf91a49b595e098cc20286233.jpg',
        location='Los Angeles',
        description='Have both bundles. 1 with Mario Kart 1 with Animal Crossing. 400 each',
        price=400,
        category='Electronics & Media',
        lat='34.1415621',
        lng='-118.1374576'
    )

    product15= Product(
        sellerId=4,
        name='Rick Gentle Monster Sunglasses （Black)',
        image='https://thumbor.offerup.com/ybO77Kyv03ZfdQ3PRZnKNWjqJvw=/1080x1080/10f4/10f4a3bf70ae48daaeb7cf39883426db.jpg',
        location='New York City',
        description='Front of the frame: 150mm Mirror foot :147mm; Lens width: 63mm Height :53mm',
        price=150,
        category='Clothing,Shoes,& Accessories',
        lat='40.8255863',
        lng='-73.9184388'
    )

    product16= Product(
        sellerId=4,
        name='Royal Albert Polka Rose 12 piece set',
        image='https://thumbor.offerup.com/4ZMSvaKyCgQBjNG3SChTqEoE2vM=/1305x1920/fc7d/fc7d5f2f0ae44ceb9aa07a0b0070f7d4.jpg',
        location='Los Angeles',
        description='Royal Albert Polka Rose 12 Piece Dinnerware set',
        price=140,
        category='Home & Garden',
        lat='34.0973785',
        lng='-118.1040381'

    )

    product17= Product(
        sellerId=5,
        name='New 4K Dual-Camera Multi-Function HD shooting foldable UAV Quadcopter Drone',
        image='https://thumbor.offerup.com/R5cSqAN7opSNyLr1N06LkPXRgrI=/500x500/fd14/fd140655e3124ad3831ff8f17ac00bd9.jpg',
        location='New York City',
        description='Product size, fold 12.5×8.1×5.3cm, unfold 25×25×5.3cm. Flight time, about 12-15min, flight distance, 150m. The battery holds 1800mAh.',
        price=99,
        category='Electronics & Media',
        lat='40.6276794',
        lng='-73.9758135'
    )

    product18= Product(
        sellerId=5,
        name='LA MER THE CONCENTRATE',
        image='https://thumbor.offerup.com/SdjAyHuitQd9sJJtkKpH_dRZ6UU=/1440x1920/3f03/3f036d30b54b4f649b176d1beddb64a8.jpg',
        location='Los Angeles',
        description='Brand New sealed in the box LA MER CONCENTRATE , 1.7 oz with three deluxe size THE EYE CONCENTRATE & THE WAND.Retails for 530.00.I’m not looking to get scammed! Local pickup at a bank, where I can verify your cash!',
        price=375,
        category='Clothing,Shoes,& Accessories',
        lat='34.16875',
        lng='-118.1189076'
    )

    product19= Product(
        sellerId=5,
        name='2 x NEW SEALED DYSON V11 OUTSIZE CORDLESS VACUUM > 2HR BATTERY > PRICE FOR EACH > ORIG $855',
        image='https://thumbor.offerup.com/PL2UaYDLl-HN2Yx82l9ma-HRITA=/720x1520/dd16/dd16ce9f756549c7a1c5934905d1bba6.jpg',
        location='New York City',
        description='OBO',
        price=696,
        category='Electronics & Media',
        lat='40.7213264',
        lng='-73.7941163'
    )


    product20= Product(
        sellerId=5,
        name='Fendi Scarf',
        image='https://thumbor.offerup.com/CZCHGA16Hn6Hq1ceSrlpApN2JgY=/1440x1920/8ca1/8ca18fa85e8e4a308856610c97befae6.jpg',
        location='Los Angeles',
        description='Fendi scarf . Top of the line . $400',
        price=400,
        category='Clothing,Shoes,& Accessories',
        lat='33.8728637',
        lng='-118.3699597'
    )

    db.session.add(product1)
    db.session.add(product2)
    db.session.add(product3)
    db.session.add(product4)
    db.session.add(product5)
    db.session.add(product6)
    db.session.add(product7)
    db.session.add(product8)
    db.session.add(product9)
    db.session.add(product10)
    db.session.add(product11)
    db.session.add(product12)
    db.session.add(product13)
    db.session.add(product14)
    db.session.add(product15)
    db.session.add(product16)
    db.session.add(product17)
    db.session.add(product18)
    db.session.add(product19)
    db.session.add(product20)
    

    db.session.commit()



def undo_products():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()