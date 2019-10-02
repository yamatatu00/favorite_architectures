# アプリ詳細（※現在開発中）
画像投稿アプリです。

# 開発環境
Haml、SCSS、Ruby、JavaScript、Ruby on Rails、VScode、PostgreSQL、MacOS、HEROKU

# 実装した機能
ユーザ新規登録・ユーザログイン・ログアウト機能(deviseのgemを使用)  
画像投稿(ストレージ:AWS S3, アップローダー:Active Storage)  
投稿機能（新規投稿、編集、削除）  
モーダルウィンドウから投稿詳細、編集、削除の各ビューに遷移  
ページネーション導入（kaminariのgemを使用）  
各投稿へのコメント機能（Ajaxによる非同期通信）  
お問い合わせメール機能（Action Mailerにて、問い合わせ本人へ確認メールと管理者に問い合わせ内容メールを同時配信)  
Leaflet APIによる地図表示と各投稿に対して位置表示の実装（変更可、詳細地図は日本のみ）  
非同期でのいいね機能  


## usersテーブル

|Column           |Type    |Options                         |
|-----------------|--------|--------------------------------|
|name             |string  |null: false,unique: true        |
|email            |string  |null: false,unique: true        |
|password         |string  |null: false                     |

### Association
- has_many :products
- has_many :comments
- has_many :likes



## productsテーブル

|Column           |Type       |Options                         |
|-----------------|-----------|--------------------------------|
|title            |string     |null: false                     |
|text             |string     |                                |
|lat              |float      |                                |
|lng              |float      |                                |
|user_id          |references |null: false,foreign_key: true   |
|likes_count      |integer    |                                |

### Association
- belongs_to :user
- has_one_attached :image
- has_many   :comments
- has_many :likes



## commentsテーブル

|Column           |Type       |Options                         |
|-----------------|-----------|--------------------------------|
|comment          |text       |null: false                     |
|user_id          |references |null: false,foreign_key: true   |
|product_id       |references |null: false,foreign_key: true   |

### Association
- belongs_to :product
- belongs_to :user



## likesテーブル

|Column           |Type       |Options                         |
|-----------------|-----------|--------------------------------|
|user_id          |integer    |null: false,foreign_key: true   |
|product_id       |integer    |null: false,foreign_key: true   |

### Association
- belongs_to :product
- belongs_to :user



## active storagesテーブル

|name             |record_type    |
|-----------------|---------------|
|image            |product        |

### Association
- belongs_to :product



## contactsテーブル

|Column           |Type    |Options                         |
|-----------------|--------|--------------------------------|
|name             |string  |null: false                     |
|email            |string  |null: false                     |
|message          |text    |null: false                     |

### Association

