# アプリ詳細（※現在開発中）
画像投稿アプリです。

# 開発環境
Haml、SCSS、Ruby、JavaScript、Ruby on Rails、VScode、PostgreSQL、MacOS、HEROKU

# 実装した機能
ユーザ新規登録・ユーザログイン・ログアウト機能(deviseのgemを使用)
画像投稿(ストレージ:AWS S3, アップローダー:active strage)
投稿機能（新規投稿、編集、削除）
モーダルウィンドウから投稿詳細、編集、削除の各ビューに遷移
各投稿へのコメント機能（Ajaxによる非同期通信）


## usersテーブル

|Column           |Type    |Options                         |
|-----------------|--------|--------------------------------|
|name             |string  |null: false,unique: true        |
|email            |string  |null: false,unique: true        |
|password         |string  |null: false                     |

### Association
- has_many :products
- has_many :comments



## productsテーブル

|Column           |Type       |Options                         |
|-----------------|-----------|--------------------------------|
|title            |string     |null: false                     |
|text             |string     |                                |
|user_id          |references |null: false,foreign_key: true   |

### Association
- belongs_to :user
- has_one_attached :image
- has_many   :comments




## commentsテーブル

|Column           |Type       |Options                         |
|-----------------|-----------|--------------------------------|
|comment          |text       |null: false                     |
|user_id          |references |null: false,foreign_key: true   |
|product_id       |references |null: false,foreign_key: true   |

### Association
- belongs_to :product
- belongs_to :user


## activestoragesテーブル

|name             |record_type    |
|-----------------|---------------|
|image            |product        |

### Association
- belongs_to :product
