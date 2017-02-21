# react-table

button组件

 基于bootstrap样式

### Installation
``` sh
npm install reactui-button
```

### API

### props

|name|type|default| description|
|-----|---|--------|----|
|text| string |- | 名称|
|type | string |default/primary/success/info/waring/danger/link| 类型 |
|diasble| bool |false| 是否可点击|
|size| string |lg/default/sm/xs | 大小|
|list| array |- | 下啦列表值|
### Demo

``` sh
npm run start
```

http://localhost:8888/example/

### Usage
``` javascript
const data = ['1','2','3']
<Button text='default' type='default' list={data}></Button>
<Button text='primary' type='primary' list={data}></Button>
<Button text='success' type='success' list={data}></Button>
<Button text='info' type='info' list={data}></Button>
<Button text='warning' type='warning' list={data}></Button>
<Button text='danger' type='danger' list={data}></Button>
<Button text='link' type='link'></Button>
```
