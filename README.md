# Class-based design using TypeScript.
Use Parcel.

## Usage
```bash
yarn
yarn dev
yarn build
```

## Note
### 目的
- TypeScriptによる書きやすく読みやすい構成の研究
- HTMLやCSSは適当です

### 問題点
- TSではES6ではできないクラス直下でのプロパティ（メンバ変数）定義が可能だが使い勝手が悪い
- 関数内からプロパティを使用したい場合はアロー関数かthiｓのbindが必要になる
- 上記の手法だとコードが直感的でないため書きづらく読みづらい
- プロパティと関数のthisとの共存が困難（ES7では改善される？）

### 解決策
- クラスをモジュール化し、クラス外で変数を設定する
- モジュール内でスコープが生成されるため、変数はグローバルを汚染しない

### 課題
- あくまでも最善策ではなく現時点における妥協案
- プロパティのアクセス制御問題（public/private）

### 利点
- オブジェクト指向なので追加や変更に強い（インスタンス化）
- jQueryからの脱却がモジュール単位で無理をせずおこなえる
- JQueryを使用する場合でも、モジュール単位なので共存・管理がしやすい

# TS基本ルール
- 基本は型推論
- 関数の引数、外部からの取得値など型推論できないもののみ型を明記
- クラスの引数とクラス外変数の名前が重複するとエラーになるので注意
- 取得するDOMはクラス外変数へ（把握しやすいため）
- 複数のメソッドで使用する変数はクラス外変数へ
- イベントはbindEventにまとめる
- ブラウザ幅を変更してメディアクエリを横断するユーザーは少数であると思われるため、横断時にはリロードさせ初期化させる（コードの負担減少のため）
