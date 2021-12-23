from app.aws_s3 import upload_file_to_s3
from app.config import Config
from flask import Blueprint, jsonify, request
from app.forms.product_form import ProductForm
from app.forms.review_form import ReviewForm

# from flask_login import login_required
from app.models import Product,db, Review, User, Product
from sqlalchemy import update

product_routes = Blueprint('product_routes', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@product_routes.route('/', methods=['POST'])
def add_product():
    if 'file' not in request.files:
        return "No user_file key in request.files"

    file=request.files['file']

    if file:
        file_url=upload_file_to_s3(file, Config.S3_BUCKET)
        product= Product(
            sellerId=request.form.get('sellerId'),
            name=request.form.get('name'),
            image=file_url,
            location=request.form.get('location'), 
            description=request.form.get('description'),
            price=request.form.get('price'), 
            category=request.form.get('category'), 
            lat=request.form.get('lat'), 
            lng=request.form.get('lng'))
        db.session.add(product)
        db.session.commit()
        return product.to_dict()
        # form=ProductForm()
        # form['csrf_token'].data=request.cookies['csrf_token']
        # if form.validate_on_submit():
        #     data = Product()
        #     form.populate_obj(data)
        #     db.session.add(data)
        #     db.session.commit()
        #     return data.to_dict()
        # return {"errors":validation_errors_to_error_messages(form.errors)}
    



@product_routes.route('/', methods=['GET'])
def all_products():
    products= Product.query.all()
    return {
        'products': [product.to_dict() for product in products]
    }

# @product_routes.route('/<int:id>', methods=['GET'])
# def one_product(id):
#     currentProductSeller=Product.query.filter(Product.id==id)[0].sellerId
#     # print('currentProductSeller',currentProductSeller)
#     reviews=Review.query.filter(Review.revieweeId==currentProductSeller)
#     return {
#         'reviews': [review.to_dict() for review in reviews]
#     }
    
    
@product_routes.route('/<int:id>', methods=['DELETE'])
def delete_product(id):
    product=Product.query.get(id)
    db.session.delete(product)
    db.session.commit()

    return product.to_dict()


@product_routes.route('/<int:id>/edit', methods=['POST'])
def edit_product(id):
    form=ProductForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data=form.data
        product=Product.query.get(id)
        product.sellerId=data['sellerId']
        product.name=data['name']
        product.image=data['image']
        product.location=data['location']
        product.description=data['description']
        product.price=data['price']
        product.category=data['category']

        db.session.commit()
        return product.to_dict()





