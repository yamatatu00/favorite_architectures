require 'rails_helper'

describe ProductsController do
  let(:user) { create(:user) }

  describe 'GET #new' do
    context 'log in' do
      before do
        login user
      end

      it "renders the :new template" do
        get :new
        expect(response).to render_template :new
      end
    end
      
    context 'not log in' do
      it 'redirects to root_path' do
        get :new
        expect(response).to redirect_to(root_path)
      end
    end
  end

  describe 'GET #edit' do
    context 'log in' do
      before do
        login user
      end

      it "assigns the requested product to @product" do
        product = create(:product)
        get :edit, params: { id: product }
        expect(assigns(:product)).to eq product
      end
  
      it "renders the :edit template" do
        product = create(:product)
        get :edit, params: { id: product }
        expect(response).to render_template :edit
      end
    end

    context 'not log in' do
      it 'redirects to root_path' do
        product = create(:product)
        get :edit, params: { id: product }
        expect(response).to redirect_to(root_path)
      end
    end
  end

  describe 'GET #index' do
    it "populates an array of products ordered by id DESC" do
      products = create_list(:product, 3) 
      get :index
      expect(assigns(:products)).to match(products.sort{ |a, b| b.id <=> a.id } )
    end

    it "renders the :index template" do
      get :index
      expect(response).to render_template :index
    end
  end

  describe 'DELETE #destroy' do
    let!(:product) { create(:product, user_id: user.id) }

    context 'log in' do
      before do
        login user
      end

      it 'deletes the product' do
        expect do
          delete :destroy, params: { id: product.id }, session: {}
        end.to change(Product, :count).by(-1)
      end

      it 'renders the :destroy template' do
        delete :destroy, params: { id: product.id }, session: {}
        expect(response).to render_template :destroy
      end

      it "If not a logged-in user's post,renders the :index template" do
        another_user = create(:user)
        another_product = create(:product, user_id: another_user.id)
        delete :destroy, params: { id: another_product.id, user_id: another_user.id }, session: {}
        expect(response).to render_template :index
      end
    end

    context 'not log in' do
      it 'redirects to root_path' do
        delete :destroy, params: { id: product }
        expect(response).to redirect_to(root_path)
      end
    end
  end
end