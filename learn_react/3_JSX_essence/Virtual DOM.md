
### 虚拟DOM帮助我们从命令式编程转到了声明式编程

#### Virtual DOM是一种变成理念

- 在这个理念中，UI是一种理想化或者说虚拟化的方式保存在内存中，他是一个相对简单的JavaScript对象

- 可以通过 ReactDOM.render 让 虚拟DOM 和 真实DOM 同步，这个过程叫做Reconciliation

#### 这种编程方式赋予了React声明式的API:

- 只需告诉React希望UI是什么状态
- React来确保DOM和这些状态是匹配的
- 不需要进行DOM操作，从手动更改DOM、书信操作、事件处理中解放出来