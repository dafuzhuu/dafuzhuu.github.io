**网站结构**

```
/zzzzdf.page
  ├── blogs
  ├── fonts
  ├── index.html
  └── static
      ├── css
          └── base.css
      ├── html
      ├── img
      ├── js
      └── pdf
```

**HTML模版**

功能：

- 加密内容
- 数学公式（需要用<span>包裹）
- 返回顶部
- font awesome图标

```html
<html>
  <head>
    <link rel="stylesheet" href="/static/css/base.css">
    
    <!-- 标题 -->
    <title>Title</title>
    <link rel="icon" href="/static/img/favicon.png" type="image/png">
    <link rel="apple-touch-icon" sizes="180x180" href="favicon.png">
    <link rel="stylesheet" href="/static/css/security.css">
    
    <!-- Mathjax -->
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

    <!--  响应式设计 -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  </head>
  <body>
    <!-- 输入密码界面 -->
    <div class="login-form" id="login-form">
        <h2>Enter Password to Access Blog</h2>
        <input type="password" id="password" placeholder="Password">
        <button onclick="checkPassword()">Submit</button>
        <p id="error-message" style="color: red;"></p>
    </div>
    
    <!-- 加密内容 -->
    <div class="protected-content" id="protected-content">
      <p>加密内容</p>
    </div>
    
    
    <!-- 无加密内容 -->
    
   
    
    <button class="back-to-top" id="backToTopBtn"><i class="fas fa-arrow-up"></i></button>
    <script src="/static/js/backToTop.js"></script>
  </body>
</html>
```
