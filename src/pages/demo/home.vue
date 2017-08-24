<template>
  <div class="row">
    <div class="col-sm-2">
      <div class="mb10">
        <a href="#DPD" class="fontsize-16" data-scroll="">数据模板定义<!-- Data Template Definition, DTD --></a>
      </div>
      <ul class="catalog">
        <li>
          <div><a data-scroll="" href="#String">String</a></div>
        </li>
        <li>
          <div><a data-scroll="" href="#Number">Number</a></div>
        </li>
        <li>
          <div><a data-scroll="" href="#Boolean">Boolean</a></div>
        </li>
        <li>
          <div><a data-scroll="" href="#Object">Object</a></div>
        </li>
        <li>
          <div><a data-scroll="" href="#Array">Array</a></div>
        </li>
        <li>
          <div><a data-scroll="" href="#Function">Function</a></div>
        </li>
        <li>
          <div><a data-scroll="" href="#RegExp">RegExp</a></div>
        </li>
        <li>
          <div><a data-scroll="" href="#Path">Path</a></div>
        </li>
      </ul>
      <div class="mb10">
        <a href="#DPD" class="fontsize-16" data-scroll="">数据占位符定义 <!-- Data Placeholder Definition, DPD --></a>
      </div>
      <ul class="catalog">
        <li>
          <div class="mb10">
            <a href="#Basic">Basic</a>
          </div>
          <div>
            <a data-scroll="" href="#Random.boolean( min?, max?, current? )"> boolean </a>
          </div>
          <div>
            <a data-scroll="" href="#Random.natural( min?, max? )"> natural </a>
          </div>
          <div>
            <a data-scroll="" href="#Random.integer( min?, max? )"> integer </a>
          </div>
          <div>
            <a data-scroll="" href="#Random.float( min?, max?, dmin?, dmax? )"> float </a>
          </div>
          <div>
            <a data-scroll="" href="#Random.character( pool? )"> character </a>
          </div>
          <div>
            <a data-scroll="" href="#Random.string( pool?, min?, max? )"> string </a>
          </div>
          <div>
            <a data-scroll="" href="#Random.range(start?, stop, step?)"> range </a>
          </div>
        </li>
        <li>
          <div class="mb10">
            <a href="#Date">Date</a>
          </div>
          <div>
            <a data-scroll="" href="#Random.date( format? )"> date </a>
          </div>
          <div>
            <a data-scroll="" href="#Random.time( format? )"> time </a>
          </div>
          <div>
            <a data-scroll="" href="#Random.datetime( format? )"> datetime </a>
          </div>
          <div>
            <a data-scroll="" href="#Random.now( unit?, format? )"> now </a>
          </div>
        </li>
        <li>
          <div class="mb10">
            <a href="#Image">Image</a>
          </div>
          <div>
            <a data-scroll="" href="#Random.image( size?, background?, foreground?, format?, text? )"> image </a>
          </div>
          <div>
            <a data-scroll="" href="#Random.dataImage( size?, text? )"> dataImage </a>
          </div>
        </li>
        <li>
          <div class="mb10">
            <a href="#Color">Color</a>
          </div>
          <div>
            <a data-scroll="" href="#Random.color()"> color </a>
          </div>
          <div>
            <a data-scroll="" href="#Random.hex()"> hex </a>
          </div>
          <div>
            <a data-scroll="" href="#Random.rgb()"> rgb </a>
          </div>
          <div>
            <a data-scroll="" href="#Random.rgba()"> rgba </a>
          </div>
          <div>
            <a data-scroll="" href="#Random.hsl()"> hsl </a>
          </div>
        </li>
        <li>
          <div class="mb10">
            <a href="#Text">Text</a>
          </div>
          <div>
            <a data-scroll="" href="#Random.paragraph( min?, max? )"> paragraph </a>
          </div>
          <div>
            <a data-scroll="" href="#Random.sentence( min?, max? )"> sentence </a>
          </div>
          <div>
            <a data-scroll="" href="#Random.word( min?, max? )"> word </a>
          </div>
          <div>
            <a data-scroll="" href="#Random.title( min?, max? )"> title </a>
          </div>
          <div>
            <a data-scroll="" href="#Random.cparagraph( min?, max? )"> cparagraph </a>
          </div>
          <div>
            <a data-scroll="" href="#Random.csentence( min?, max? )"> csentence </a>
          </div>
          <div>
            <a data-scroll="" href="#Random.cword( pool?, min?, max? )"> cword </a>
          </div>
          <div>
            <a data-scroll="" href="#Random.ctitle( min?, max? )"> ctitle </a>
          </div>
        </li>
        <li>
          <div class="mb10">
            <a href="#Name">Name</a>
          </div>
          <div>
            <a data-scroll="" href="#Random.first()"> first </a>
          </div>
          <div>
            <a data-scroll="" href="#Random.last()"> last </a>
          </div>
          <div>
            <a data-scroll="" href="#Random.name( middle? )"> name </a>
          </div>
          <div>
            <a data-scroll="" href="#Random.cfirst()"> cfirst </a>
          </div>
          <div>
            <a data-scroll="" href="#Random.clast()"> clast </a>
          </div>
          <div>
            <a data-scroll="" href="#Random.cname()"> cname </a>
          </div>
        </li>
        <li>
          <div class="mb10">
            <a href="#Web">Web</a>
          </div>
          <div>
            <a data-scroll="" href="#Random.url()"> url </a>
          </div>
          <div>
            <a data-scroll="" href="#Random.domain()"> domain </a>
          </div>
          <div>
            <a data-scroll="" href="#Random.protocol()"> protocol </a>
          </div>
          <div>
            <a data-scroll="" href="#Random.tld()"> tld </a>
          </div>
          <div>
            <a data-scroll="" href="#Random.email()"> email </a>
          </div>
          <div>
            <a data-scroll="" href="#Random.ip()"> ip </a>
          </div>
        </li>
        <li>
          <div class="mb10">
            <a href="#Address">Address</a>
          </div>
          <div>
            <a data-scroll="" href="#Random.region()"> region </a>
          </div>
          <div>
            <a data-scroll="" href="#Random.province()"> province </a>
          </div>
          <div>
            <a data-scroll="" href="#Random.city( prefix? )"> city </a>
          </div>
          <div>
            <a data-scroll="" href="#Random.county( prefix? )"> county </a>
          </div>
          <div>
            <a data-scroll="" href="#Random.zip()"> zip </a>
          </div>
        </li>
        <li>
          <div class="mb10">
            <a href="#Helper">Helper</a>
          </div>
          <div>
            <a data-scroll="" href="#Random.capitalize( word )"> capitalize </a>
          </div>
          <div>
            <a data-scroll="" href="#Random.upper( str )"> upper </a>
          </div>
          <div>
            <a data-scroll="" href="#Random.lower( str )"> lower </a>
          </div>
          <div>
            <a data-scroll="" href="#Random.pick( arr )"> pick </a>
          </div>
          <div>
            <a data-scroll="" href="#Random.shuffle( arr )"> shuffle </a>
          </div>
        </li>
        <li>
          <div class="mb10">
            <a href="#Miscellaneous">Miscellaneous</a>
          </div>
          <div>
            <a data-scroll="" href="#Random.guid()"> guid </a>
          </div>
          <div>
            <a data-scroll="" href="#Random.id()"> id </a>
          </div>
          <div>
            <a data-scroll="" href="#Random.increment( step? )"> increment </a>
          </div>
        </li>
      </ul>
    </div>
    <div class="col-sm-10">
      <blockquote>
        <p>
          <span class="specfont" style="font-size: 20px; margin-right: 10px; color: #999;"></span>
          <span class="color-9">你可以打开控制台，随意地试验这些方法。</span>
        </p>
      </blockquote>

      <div id="DTD" class="fontsize-20 mb40">数据模板定义 <!-- Data Template Definition, DTD --></div>
      <div class="definition">
        <div class="mb40">
          <div class="fontsize-16 mb40" id="String">String</div>
          <div class="mb20">
            <div  class="fontsize-14 mb20"><code>'name|min-max': string</code></div>
          <div class="mb20">
            <div class="row">
              <div class="col-sm-6">
                <div class="code">
                  <span class="badge">Data Template</span>
                  <pre><code class="javascript hljs">Mock.mock({
  <span class="hljs-string">"string|1-10"</span>: <span class="hljs-string">"★"</span>
})</code></pre>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="result">
                  <span class="badge">Result</span>
                  <pre><code class="javascript hljs">{
  <span class="hljs-string">"string"</span>: <span class="hljs-string">"★"</span>
}</code></pre>
                  <a href="javascript:;" class="mockicon rerun"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mb20">
          <div class="fontsize-14 mb20"><code>'name|count': string</code></div>
        <div class="mb20">
          <div class="row">
            <div class="col-sm-6">
              <div class="code">
                <span class="badge">Data Template</span>
                <pre><code class="javascript hljs">Mock.mock({
  <span class="hljs-string">"string|3"</span>: <span class="hljs-string">"★★★"</span>
})</code></pre>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="result">
                <span class="badge">Result</span>
                <pre><code class="javascript hljs">{
  <span class="hljs-string">"string"</span>: <span class="hljs-string">"★★★★★★★★★"</span>
}</code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mb40">
      <div class="fontsize-16 mb40" id="Number">Number</div>
      <div class="mb20">
        <div class="fontsize-14 mb20"><code>'name|+1': number</code></div>
      <div class="mb20">
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs">Mock.mock({
  <span class="hljs-string">"number|+1"</span>: <span class="hljs-number">202</span>
})</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <pre><code class="javascript hljs">{
  <span class="hljs-string">"number"</span>: <span class="hljs-number">201</span>
}</code></pre>
              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mb20">
      <div class="fontsize-14 mb20"><code>'name|min-max': number</code></div>
    <div class="mb20">
      <div class="row">
        <div class="col-sm-6">
          <div class="code">
            <span class="badge">Data Template</span>
            <pre><code class="javascript hljs">Mock.mock({
  <span class="hljs-string">"number|1-100"</span>: <span class="hljs-number">100</span>
})</code></pre>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="result">
            <span class="badge">Result</span>
            <pre><code class="javascript hljs">{
  <span class="hljs-string">"number"</span>: <span class="hljs-number">86</span>
}</code></pre>
            <a href="javascript:;" class="mockicon rerun"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mb20">
    <div id="" class="fontsize-14 mb20"><code>'name|min-max.dmin-dmax': number</code></div>
  <div class="mb20">
    <div class="row">
      <div class="col-sm-6">
        <div class="code">
          <span class="badge">Data Template</span>
          <pre><code class="javascript hljs">Mock.mock({
  <span class="hljs-string">"number|1-100.1-10"</span>: <span class="hljs-number">1</span>
})</code></pre>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="result">
          <span class="badge">Result</span>
          <pre><code class="javascript hljs">{
  <span class="hljs-string">"number"</span>: <span class="hljs-number">26.917720489</span>
}</code></pre>
          <a href="javascript:;" class="mockicon rerun"></a>
        </div>
      </div>
    </div>
  </div>
  <div class="mb20">
    <div class="row">
      <div class="col-sm-6">
        <div class="code">
          <span class="badge">Data Template</span>
          <pre><code class="javascript hljs">Mock.mock({
  <span class="hljs-string">"number|123.1-10"</span>: <span class="hljs-number">1</span>
})</code></pre>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="result">
          <span class="badge">Result</span>
          <pre><code class="javascript hljs">{
  <span class="hljs-string">"number"</span>: <span class="hljs-number">123.1062</span>
}</code></pre>
          <a href="javascript:;" class="mockicon rerun"></a>
        </div>
      </div>
    </div>
  </div>
  <div class="mb20">
    <div class="row">
      <div class="col-sm-6">
        <div class="code">
          <span class="badge">Data Template</span>
          <pre><code class="javascript hljs">Mock.mock({
  <span class="hljs-string">"number|123.3"</span>: <span class="hljs-number">1</span>
})</code></pre>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="result">
          <span class="badge">Result</span>
          <pre><code class="javascript hljs">{
  <span class="hljs-string">"number"</span>: <span class="hljs-number">123.207</span>
}</code></pre>
          <a href="javascript:;" class="mockicon rerun"></a>
        </div>
      </div>
    </div>
  </div>
  <div class="mb20">
    <div class="row">
      <div class="col-sm-6">
        <div class="code">
          <span class="badge">Data Template</span>
          <pre><code class="javascript hljs">Mock.mock({
  <span class="hljs-string">"number|123.10"</span>: <span class="hljs-number">1.123</span>
})</code></pre>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="result">
          <span class="badge">Result</span>
          <pre><code class="javascript hljs">{
  <span class="hljs-string">"number"</span>: <span class="hljs-number">123.1235325183</span>
}</code></pre>
          <a href="javascript:;" class="mockicon rerun"></a>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  <div class="mb40">
    <div class="fontsize-16 mb40" id="Boolean">Boolean</div>
    <div class="mb20">
      <div class="fontsize-14 mb20"><code>'name|1': boolean</code></div>
    <div class="mb20">
      <div class="row">
        <div class="col-sm-6">
          <div class="code">
            <span class="badge">Data Template</span>
            <pre><code class="javascript hljs">Mock.mock({
  <span class="hljs-string">"boolean|1"</span>: <span class="hljs-literal">true</span>
})</code></pre>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="result">
            <span class="badge">Result</span>
            <pre><code class="javascript hljs">{
  <span class="hljs-string">"boolean"</span>: <span class="hljs-literal">false</span>
}</code></pre>
            <a href="javascript:;" class="mockicon rerun"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mb20">
    <div class="fontsize-14 mb20"><code>'name|min-max': boolean</code></div>
  <div class="mb20">
    <div class="row">
      <div class="col-sm-6">
        <div class="code">
          <span class="badge">Data Template</span>
          <pre><code class="javascript hljs">Mock.mock({
  <span class="hljs-string">"boolean|1-2"</span>: <span class="hljs-literal">true</span>
})</code></pre>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="result">
          <span class="badge">Result</span>
          <pre><code class="javascript hljs">{
  <span class="hljs-string">"boolean"</span>: <span class="hljs-literal">false</span>
}</code></pre>
          <a href="javascript:;" class="mockicon rerun"></a>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  <div class="mb40">
    <div class="fontsize-16 mb40" id="Object">Object</div>
    <div class="mb20">
      <div class="fontsize-14 mb20"><code>'name|count': object</code></div>
    <div class="mb20">
      <div class="row">
        <div class="col-sm-6">
          <div class="code">
            <span class="badge">Data Template</span>
            <pre><code class="javascript hljs">Mock.mock({
  <span class="hljs-string">"object|2"</span>: {
    <span class="hljs-string">"310000"</span>: <span class="hljs-string">"上海市"</span>,
    <span class="hljs-string">"320000"</span>: <span class="hljs-string">"江苏省"</span>,
    <span class="hljs-string">"330000"</span>: <span class="hljs-string">"浙江省"</span>,
    <span class="hljs-string">"340000"</span>: <span class="hljs-string">"安徽省"</span>
  }
})</code></pre>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="result">
            <span class="badge">Result</span>
            <pre><code class="javascript hljs">{
  <span class="hljs-string">"object"</span>: {
    <span class="hljs-string">"320000"</span>: <span class="hljs-string">"江苏省"</span>,
    <span class="hljs-string">"340000"</span>: <span class="hljs-string">"安徽省"</span>
  }
}</code></pre>
            <a href="javascript:;" class="mockicon rerun"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mb20">
    <div class="fontsize-14 mb20"><code>'name|min-max': object</code></div>
  <div class="mb20">
    <div class="row">
      <div class="col-sm-6">
        <div class="code">
          <span class="badge">Data Template</span>
          <pre><code class="javascript hljs">Mock.mock({
  <span class="hljs-string">"object|2-4"</span>: {
    <span class="hljs-string">"110000"</span>: <span class="hljs-string">"北京市"</span>,
    <span class="hljs-string">"120000"</span>: <span class="hljs-string">"天津市"</span>,
    <span class="hljs-string">"130000"</span>: <span class="hljs-string">"河北省"</span>,
    <span class="hljs-string">"140000"</span>: <span class="hljs-string">"山西省"</span>
  }
})</code></pre>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="result">
          <span class="badge">Result</span>
          <pre><code class="javascript hljs">{
  <span class="hljs-string">"object"</span>: {
    <span class="hljs-string">"110000"</span>: <span class="hljs-string">"北京市"</span>,
    <span class="hljs-string">"120000"</span>: <span class="hljs-string">"天津市"</span>,
    <span class="hljs-string">"140000"</span>: <span class="hljs-string">"山西省"</span>
  }
}</code></pre>
          <a href="javascript:;" class="mockicon rerun"></a>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  <div class="mb40">
    <div class="fontsize-16 mb40" id="Array">Array</div>
    <div class="mb20">
      <div class="fontsize-14 mb20"><code>'name|1': array</code></div>
    <div class="mb20">
      <div class="row">
        <div class="col-sm-6">
          <div class="code">
            <span class="badge">Data Template</span>
            <pre><code class="javascript hljs">Mock.mock({
  <span class="hljs-string">"array|1"</span>: [
    <span class="hljs-string">"AMD"</span>,
    <span class="hljs-string">"CMD"</span>,
    <span class="hljs-string">"UMD"</span>
  ]
})</code></pre>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="result">
            <span class="badge">Result</span>
            <pre><code class="javascript hljs">{
  <span class="hljs-string">"array"</span>: <span class="hljs-string">"CMD"</span>
}</code></pre>
            <a href="javascript:;" class="mockicon rerun"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mb20">
    <div class="fontsize-14 mb20"><code>'name|+1': array</code></div>
  <div class="mb20">
    <div class="row">
      <div class="col-sm-6">
        <div class="code">
          <span class="badge">Data Template</span>
          <pre><code class="javascript hljs">Mock.mock({
  <span class="hljs-string">"array|+1"</span>: [
    <span class="hljs-string">"AMD"</span>,
    <span class="hljs-string">"CMD"</span>,
    <span class="hljs-string">"UMD"</span>
  ]
})</code></pre>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="result">
          <span class="badge">Result</span>
          <pre><code class="javascript hljs">{
  <span class="hljs-string">"array"</span>: <span class="hljs-string">"AMD"</span>
}</code></pre>
          <a href="javascript:;" class="mockicon rerun"></a>
        </div>
      </div>
    </div>
  </div>
  <div class="mb20">
    <div class="row">
      <div class="col-sm-6">
        <div class="code">
          <span class="badge">Data Template</span>
          <pre><code class="javascript hljs">Mock.mock({
  <span class="hljs-string">"array|1-10"</span>: [
    {
      <span class="hljs-string">"name|+1"</span>: [
        <span class="hljs-string">"Hello"</span>,
        <span class="hljs-string">"Mock.js"</span>,
        <span class="hljs-string">"!"</span>
      ]
    }
  ]
})</code></pre>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="result">
          <span class="badge">Result</span>
          <pre><code class="javascript hljs">{
  <span class="hljs-string">"array"</span>: [
    {
      <span class="hljs-string">"name"</span>: <span class="hljs-string">"Hello"</span>
    },
    {
      <span class="hljs-string">"name"</span>: <span class="hljs-string">"Mock.js"</span>
    },
    {
      <span class="hljs-string">"name"</span>: <span class="hljs-string">"!"</span>
    }
  ]
}</code></pre>
          <a href="javascript:;" class="mockicon rerun"></a>
        </div>
      </div>
    </div>
  </div>
  </div>
  <div class="mb20">
    <div class="fontsize-14 mb20"><code>'name|min-max': array</code></div>
  <div class="mb20">
    <div class="row">
      <div class="col-sm-6">
        <div class="code">
          <span class="badge">Data Template</span>
          <pre><code class="javascript hljs">Mock.mock({
  <span class="hljs-string">"array|1-10"</span>: [
    <span class="hljs-string">"Mock.js"</span>
  ]
})</code></pre>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="result">
          <span class="badge">Result</span>
          <pre><code class="javascript hljs">{
  <span class="hljs-string">"array"</span>: [
    <span class="hljs-string">"Mock.js"</span>,
    <span class="hljs-string">"Mock.js"</span>,
    <span class="hljs-string">"Mock.js"</span>,
    <span class="hljs-string">"Mock.js"</span>,
    <span class="hljs-string">"Mock.js"</span>,
    <span class="hljs-string">"Mock.js"</span>
  ]
}</code></pre>
          <a href="javascript:;" class="mockicon rerun"></a>
        </div>
      </div>
    </div>
  </div>
  <div class="mb20">
    <div class="row">
      <div class="col-sm-6">
        <div class="code">
          <span class="badge">Data Template</span>
          <pre><code class="javascript hljs">Mock.mock({
  <span class="hljs-string">"array|1-10"</span>: [
    <span class="hljs-string">"Hello"</span>,
    <span class="hljs-string">"Mock.js"</span>,
    <span class="hljs-string">"!"</span>
  ]
})</code></pre>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="result">
          <span class="badge">Result</span>
          <pre><code class="javascript hljs">{
  <span class="hljs-string">"array"</span>: [
    <span class="hljs-string">"Hello"</span>,
    <span class="hljs-string">"Mock.js"</span>,
    <span class="hljs-string">"!"</span>,
    <span class="hljs-string">"Hello"</span>,
    <span class="hljs-string">"Mock.js"</span>,
    <span class="hljs-string">"!"</span>
  ]
}</code></pre>
          <a href="javascript:;" class="mockicon rerun"></a>
        </div>
      </div>
    </div>
  </div>
  </div>
  <div class="mb20">
    <div class="fontsize-14 mb20"><code>'name|count': array</code></div>
  <div class="mb20">
    <div class="row">
      <div class="col-sm-6">
        <div class="code">
          <span class="badge">Data Template</span>
          <pre><code class="javascript hljs">Mock.mock({
  <span class="hljs-string">"array|3"</span>: [
    <span class="hljs-string">"Mock.js"</span>
  ]
})</code></pre>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="result">
          <span class="badge">Result</span>
          <pre><code class="javascript hljs">{
  <span class="hljs-string">"array"</span>: [
    <span class="hljs-string">"Mock.js"</span>,
    <span class="hljs-string">"Mock.js"</span>,
    <span class="hljs-string">"Mock.js"</span>
  ]
}</code></pre>
          <a href="javascript:;" class="mockicon rerun"></a>
        </div>
      </div>
    </div>
  </div>
  <div class="mb20">
    <div class="row">
      <div class="col-sm-6">
        <div class="code">
          <span class="badge">Data Template</span>
          <pre><code class="javascript hljs">Mock.mock({
  <span class="hljs-string">"array|3"</span>: [
    <span class="hljs-string">"Hello"</span>,
    <span class="hljs-string">"Mock.js"</span>,
    <span class="hljs-string">"!"</span>
  ]
})</code></pre>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="result">
          <span class="badge">Result</span>
          <pre><code class="javascript hljs">{
  <span class="hljs-string">"array"</span>: [
    <span class="hljs-string">"Hello"</span>,
    <span class="hljs-string">"Mock.js"</span>,
    <span class="hljs-string">"!"</span>,
    <span class="hljs-string">"Hello"</span>,
    <span class="hljs-string">"Mock.js"</span>,
    <span class="hljs-string">"!"</span>,
    <span class="hljs-string">"Hello"</span>,
    <span class="hljs-string">"Mock.js"</span>,
    <span class="hljs-string">"!"</span>
  ]
}</code></pre>
          <a href="javascript:;" class="mockicon rerun"></a>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  <div class="mb40">
    <div class="fontsize-16 mb40" id="Function">Function</div>
    <div class="mb20">
      <div class="fontsize-14 mb20"><code>'name': function</code></div>
    <div class="mb20">
      <div class="row">
        <div class="col-sm-6">
          <div class="code">
            <span class="badge">Data Template</span>
            <pre><code class="javascript hljs">Mock.mock({
  <span class="hljs-string">'foo'</span>: <span class="hljs-string">'Syntax Demo'</span>,
  <span class="hljs-string">'name'</span>: <span class="hljs-function"><span class="hljs-keyword">function</span><span
                  class="hljs-params">()</span> </span>{
    <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.foo
  }
})</code></pre>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="result">
            <span class="badge">Result</span>
            <pre><code class="javascript hljs">{
  <span class="hljs-string">"foo"</span>: <span class="hljs-string">"Syntax Demo"</span>,
  <span class="hljs-string">"name"</span>: <span class="hljs-string">"Syntax Demo"</span>
}</code></pre>
            <a href="javascript:;" class="mockicon rerun"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  <div class="mb40">
    <div class="fontsize-16 mb40" id="RegExp">RegExp</div>
    <div class="mb20">
      <div class="fontsize-14 mb20"><code>'name': regexp</code></div>
    <div class="mb20">
      <div class="row">
        <div class="col-sm-6">
          <div class="code">
            <span class="badge">Data Template</span>
            <pre><code class="javascript hljs">Mock.mock({
  <span class="hljs-string">'regexp'</span>: <span class="hljs-regexp">/[a-z][A-Z][0-9]/</span>
})</code></pre>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="result">
            <span class="badge">Result</span>
            <pre><code class="javascript hljs">{
  <span class="hljs-string">"regexp"</span>: <span class="hljs-string">"sT5"</span>
}</code></pre>
            <a href="javascript:;" class="mockicon rerun"></a>
          </div>
        </div>
      </div>
    </div>
    <div class="mb20">
      <div class="row">
        <div class="col-sm-6">
          <div class="code">
            <span class="badge">Data Template</span>
            <pre><code class="javascript hljs">Mock.mock({
  <span class="hljs-string">'regexp'</span>: <span class="hljs-regexp">/\w\W\s\S\d\D/</span>
})</code></pre>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="result">
            <span class="badge">Result</span>
            <pre><code class="javascript hljs">{
  <span class="hljs-string">"regexp"</span>: <span class="hljs-string">"o\\ Z1_"</span>
}</code></pre>
            <a href="javascript:;" class="mockicon rerun"></a>
          </div>
        </div>
      </div>
    </div>
    <div class="mb20">
      <div class="row">
        <div class="col-sm-6">
          <div class="code">
            <span class="badge">Data Template</span>
            <pre><code class="javascript hljs">Mock.mock({
  <span class="hljs-string">'regexp'</span>: <span class="hljs-regexp">/\d{5,10}/</span>
})</code></pre>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="result">
            <span class="badge">Result</span>
            <pre><code class="javascript hljs">{
  <span class="hljs-string">"regexp"</span>: <span class="hljs-string">"5069052443"</span>
}</code></pre>
            <a href="javascript:;" class="mockicon rerun"></a>
          </div>
        </div>
      </div>
    </div>
    <div class="mb20">
      <div class="row">
        <div class="col-sm-6">
          <div class="code">
            <span class="badge">Data Template</span>
            <pre><code class="javascript hljs">Mock.mock({
  <span class="hljs-string">'regexp|3'</span>: <span class="hljs-regexp">/\d{5,10}\-/</span>
})</code></pre>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="result">
            <span class="badge">Result</span>
            <pre><code class="javascript hljs">{
  <span class="hljs-string">"regexp"</span>: <span class="hljs-string">"7256140-61175612-18550495-"</span>
}</code></pre>
            <a href="javascript:;" class="mockicon rerun"></a>
          </div>
        </div>
      </div>
    </div>
    <div class="mb20">
      <div class="row">
        <div class="col-sm-6">
          <div class="code">
            <span class="badge">Data Template</span>
            <pre><code class="javascript hljs">Mock.mock({
  <span class="hljs-string">'regexp|1-5'</span>: <span class="hljs-regexp">/\d{5,10}\-/</span>
})</code></pre>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="result">
            <span class="badge">Result</span>
            <pre><code class="javascript hljs">{
  <span class="hljs-string">"regexp"</span>: <span class="hljs-string">"47708444-08732723-544147-"</span>
}</code></pre>
            <a href="javascript:;" class="mockicon rerun"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  <div class="mb40">
    <div class="fontsize-16 mb40" id="Path">Path</div>
    <div class="mb20">
      <div class="fontsize-14 mb20"><code>Absolute Path</code></div>
    <div class="mb20">
      <div class="row">
        <div class="col-sm-6">
          <div class="code">
            <span class="badge">Data Template</span>
            <pre><code class="javascript hljs">Mock.mock({
  <span class="hljs-string">"foo"</span>: <span class="hljs-string">"Hello"</span>,
  <span class="hljs-string">"nested"</span>: {
    <span class="hljs-string">"a"</span>: {
      <span class="hljs-string">"b"</span>: {
        <span class="hljs-string">"c"</span>: <span class="hljs-string">"Mock.js"</span>
      }
    }
  },
  <span class="hljs-string">"absolutePath"</span>: <span class="hljs-string">"@/foo @/nested/a/b/c"</span>
})</code></pre>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="result">
            <span class="badge">Result</span>
            <pre><code class="javascript hljs">{
  <span class="hljs-string">"foo"</span>: <span class="hljs-string">"Hello"</span>,
  <span class="hljs-string">"nested"</span>: {
    <span class="hljs-string">"a"</span>: {
      <span class="hljs-string">"b"</span>: {
        <span class="hljs-string">"c"</span>: <span class="hljs-string">"Mock.js"</span>
      }
    }
  },
  <span class="hljs-string">"absolutePath"</span>: <span class="hljs-string">"Hello Mock.js"</span>
}</code></pre>
            <a href="javascript:;" class="mockicon rerun"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mb20">
    <div class="fontsize-14 mb20"><code>Relative Path</code></div>
  <div class="mb20">
    <div class="row">
      <div class="col-sm-6">
        <div class="code">
          <span class="badge">Data Template</span>
          <pre><code class="javascript hljs">Mock.mock({
  <span class="hljs-string">"foo"</span>: <span class="hljs-string">"Hello"</span>,
  <span class="hljs-string">"nested"</span>: {
    <span class="hljs-string">"a"</span>: {
      <span class="hljs-string">"b"</span>: {
        <span class="hljs-string">"c"</span>: <span class="hljs-string">"Mock.js"</span>
      }
    }
  },
  <span class="hljs-string">"relativePath"</span>: {
    <span class="hljs-string">"a"</span>: {
      <span class="hljs-string">"b"</span>: {
        <span class="hljs-string">"c"</span>: <span class="hljs-string">"@../../../foo @../../../nested/a/b/c"</span>
      }
    }
  }
})</code></pre>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="result">
          <span class="badge">Result</span>
          <pre><code class="javascript hljs">{
  <span class="hljs-string">"foo"</span>: <span class="hljs-string">"Hello"</span>,
  <span class="hljs-string">"nested"</span>: {
    <span class="hljs-string">"a"</span>: {
      <span class="hljs-string">"b"</span>: {
        <span class="hljs-string">"c"</span>: <span class="hljs-string">"Mock.js"</span>
      }
    }
  },
  <span class="hljs-string">"relativePath"</span>: {
    <span class="hljs-string">"a"</span>: {
      <span class="hljs-string">"b"</span>: {
        <span class="hljs-string">"c"</span>: <span class="hljs-string">"Hello Mock.js"</span>
      }
    }
  }
}</code></pre>
          <a href="javascript:;" class="mockicon rerun"></a>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  </div>

  <div id="DPD" class="fontsize-20 mb40">数据占位符定义 <!-- Data Placeholder Definition, DPD --></div>
  <div class="definition">
    <div class="mb20">
      <div class="fontsize-16 mb20" id="Basic">Basic</div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.boolean( min?, max?, current? )"><code>Random.boolean( min?, max?,
          current? )</code></div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.boolean()</span>
Random.boolean()
Mock.mock(<span class="hljs-string">'@boolean'</span>)
Mock.mock(<span class="hljs-string">'@boolean()'</span>)

<span class="hljs-comment">// Random.boolean( min, max, current )</span>
Random.boolean(<span class="hljs-number">1</span>, <span class="hljs-number">9</span>, <span
                    class="hljs-literal">true</span>)
Mock.mock(<span class="hljs-string">'@boolean(1, 9, true)'</span>)</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div>
                                            <pre><code class="javascript hljs"><span class="hljs-comment">// Random.boolean()</span>
<span class="hljs-literal">true</span>
<span class="hljs-literal">true</span>
<span class="hljs-literal">false</span>

<span class="hljs-comment">// Random.boolean( min, max, current )</span>
<span class="hljs-literal">false</span>
<span class="hljs-literal">false</span></code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.natural( min?, max? )"><code>Random.natural( min?, max? )</code></div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.natural()</span>
Random.natural()
Mock.mock(<span class="hljs-string">'@natural'</span>)
Mock.mock(<span class="hljs-string">'@natural()'</span>)

<span class="hljs-comment">// Random.natural( min )</span>
Random.natural(<span class="hljs-number">10000</span>)
Mock.mock(<span class="hljs-string">'@natural(10000)'</span>)

<span class="hljs-comment">// Random.natural( min, max )</span>
Random.natural(<span class="hljs-number">60</span>, <span class="hljs-number">100</span>)
Mock.mock(<span class="hljs-string">'@natural(60, 100)'</span>)</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div>
                                            <pre><code class="javascript hljs"><span class="hljs-comment">// Random.natural()</span>
<span class="hljs-number">5429398466271542</span>
<span class="hljs-number">1895678871399274</span>
<span class="hljs-number">8940958124484468</span>

<span class="hljs-comment">// Random.natural( min )</span>
<span class="hljs-number">1576181678895084</span>
<span class="hljs-number">4490964144251056</span>

<span class="hljs-comment">// Random.natural( min, max )</span>
<span class="hljs-number">95</span>
<span class="hljs-number">90</span></code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.integer( min?, max? )"><code>Random.integer( min?, max? )</code></div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.integer()</span>
Random.integer()
Mock.mock(<span class="hljs-string">'@integer'</span>)
Mock.mock(<span class="hljs-string">'@integer()'</span>)

<span class="hljs-comment">// Random.integer( min )</span>
Random.integer(<span class="hljs-number">10000</span>)
Mock.mock(<span class="hljs-string">'@integer(10000)'</span>)

<span class="hljs-comment">// Random.integer( min, max )</span>
Random.integer(<span class="hljs-number">60</span>, <span class="hljs-number">100</span>)
Mock.mock(<span class="hljs-string">'@integer(60, 100)'</span>)</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div>
                                            <pre><code class="javascript hljs"><span class="hljs-comment">// Random.integer()</span>
-<span class="hljs-number">2918347745126708</span>
-<span class="hljs-number">7505922429662944</span>
-<span class="hljs-number">2662382316669704</span>

<span class="hljs-comment">// Random.integer( min )</span>
<span class="hljs-number">3787421499997033</span>
<span class="hljs-number">8218218088184840</span>

<span class="hljs-comment">// Random.integer( min, max )</span>
<span class="hljs-number">87</span>
<span class="hljs-number">71</span></code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.float( min?, max?, dmin?, dmax? )"><code>Random.float( min?, max?,
          dmin?, dmax? )</code></div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.float()</span>
Random.float()
Mock.mock(<span class="hljs-string">'@float'</span>)
Mock.mock(<span class="hljs-string">'@float()'</span>)

<span class="hljs-comment">// Random.float( min )</span>
Random.float(<span class="hljs-number">0</span>)
Mock.mock(<span class="hljs-string">'@float(0)'</span>)

<span class="hljs-comment">// Random.float( min, max )</span>
Random.float(<span class="hljs-number">60</span>, <span class="hljs-number">100</span>)
Mock.mock(<span class="hljs-string">'@float(60, 100)'</span>)

<span class="hljs-comment">// Random.float( min, max, dmin )</span>
Random.float(<span class="hljs-number">60</span>, <span class="hljs-number">100</span>, <span
                    class="hljs-number">3</span>)
Mock.mock(<span class="hljs-string">'@float(60, 100, 3)'</span>)

<span class="hljs-comment">// Random.float( min, max, dmin, dmax )</span>
Random.float(<span class="hljs-number">60</span>, <span class="hljs-number">100</span>, <span
                    class="hljs-number">3</span>, <span class="hljs-number">5</span>)
Mock.mock(<span class="hljs-string">'@float(60, 100, 3, 5)'</span>)
</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div>
                                            <pre><code class="javascript hljs"><span class="hljs-comment">// Random.float()</span>
-<span class="hljs-number">290701807553492</span>
<span class="hljs-number">8198078677100664</span>
-<span class="hljs-number">840734564407804.4</span>

<span class="hljs-comment">// Random.float( min )</span>
<span class="hljs-number">1951052379721710.8</span>
<span class="hljs-number">7491110039287451</span>

<span class="hljs-comment">// Random.float( min, max )</span>
<span class="hljs-number">71.159750677858</span>
<span class="hljs-number">76.02765831347577</span>

<span class="hljs-comment">// Random.float( min, max, dmin )</span>
<span class="hljs-number">96.5888682764935</span>
<span class="hljs-number">80.873644424159</span>

<span class="hljs-comment">// Random.float( min, max, dmin, dmax )</span>
<span class="hljs-number">96.16277</span>
<span class="hljs-number">80.1757</span>
</code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.character( pool? )"><code>Random.character( pool? )</code></div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.character()</span>
Random.character()
Mock.mock(<span class="hljs-string">'@character'</span>)
Mock.mock(<span class="hljs-string">'@character()'</span>)

<span class="hljs-comment">// Random.character( 'lower/upper/number/symbol' )</span>
Random.character(<span class="hljs-string">'lower'</span>)
Random.character(<span class="hljs-string">'upper'</span>)
Random.character(<span class="hljs-string">'number'</span>)
Random.character(<span class="hljs-string">'symbol'</span>)

Mock.mock(<span class="hljs-string">'@character("lower")'</span>)
Mock.mock(<span class="hljs-string">'@character("upper")'</span>)
Mock.mock(<span class="hljs-string">'@character("number")'</span>)
Mock.mock(<span class="hljs-string">'@character("symbol")'</span>)

<span class="hljs-comment">// Random.character( pool )</span>
Random.character(<span class="hljs-string">'aeiou'</span>)
Mock.mock(<span class="hljs-string">'@character("aeiou")'</span>)</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div>
                                            <pre><code class="javascript hljs"><span class="hljs-comment">// Random.character()</span>
<span class="hljs-string">"i"</span>
<span class="hljs-string">"Q"</span>
<span class="hljs-string">"w"</span>

<span class="hljs-comment">// Random.character( 'lower/upper/number/symbol' )</span>
<span class="hljs-string">"f"</span>
<span class="hljs-string">"L"</span>
<span class="hljs-string">"4"</span>
<span class="hljs-string">"@"</span>

<span class="hljs-string">"e"</span>
<span class="hljs-string">"M"</span>
<span class="hljs-string">"5"</span>
<span class="hljs-string">"*"</span>

<span class="hljs-comment">// Random.character( pool )</span>
<span class="hljs-string">"u"</span>
<span class="hljs-string">"i"</span></code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.string( pool?, min?, max? )"><code>Random.string( pool?, min?, max?
          )</code></div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.string()</span>
Random.string()
Mock.mock(<span class="hljs-string">'@string'</span>)
Mock.mock(<span class="hljs-string">'@string()'</span>)

<span class="hljs-comment">// Random.string( length )</span>
Random.string(<span class="hljs-number">5</span>)
Mock.mock(<span class="hljs-string">'@string(5)'</span>)

<span class="hljs-comment">// Random.string( pool, length )</span>
Random.string(<span class="hljs-string">'lower'</span>, <span class="hljs-number">5</span>)
Random.string(<span class="hljs-string">'upper'</span>, <span class="hljs-number">5</span>)
Random.string(<span class="hljs-string">'number'</span>, <span class="hljs-number">5</span>)
Random.string(<span class="hljs-string">'symbol'</span>, <span class="hljs-number">5</span>)
Random.string(<span class="hljs-string">'aeiou'</span>, <span class="hljs-number">5</span>)

Mock.mock(<span class="hljs-string">'@string("lower", 5)'</span>)
Mock.mock(<span class="hljs-string">'@string("upper", 5)'</span>)
Mock.mock(<span class="hljs-string">'@string("number", 5)'</span>)
Mock.mock(<span class="hljs-string">'@string("symbol", 5)'</span>)
Mock.mock(<span class="hljs-string">'@string("aeiou", 5)'</span>)

<span class="hljs-comment">// Random.string( min, max )</span>
Random.string(<span class="hljs-number">7</span>, <span class="hljs-number">10</span>)
Mock.mock(<span class="hljs-string">'@string(7, 10)'</span>)

<span class="hljs-comment">// Random.string( pool, min, max )</span>
Random.string(<span class="hljs-string">'lower'</span>, <span class="hljs-number">1</span>, <span
                    class="hljs-number">3</span>)
Random.string(<span class="hljs-string">'upper'</span>, <span class="hljs-number">1</span>, <span
                    class="hljs-number">3</span>)
Random.string(<span class="hljs-string">'number'</span>, <span class="hljs-number">1</span>, <span
                    class="hljs-number">3</span>)
Random.string(<span class="hljs-string">'symbol'</span>, <span class="hljs-number">1</span>, <span
                    class="hljs-number">3</span>)
Random.string(<span class="hljs-string">'aeiou'</span>, <span class="hljs-number">1</span>, <span
                    class="hljs-number">3</span>)

Mock.mock(<span class="hljs-string">'@string("lower", 1, 3)'</span>)
Mock.mock(<span class="hljs-string">'@string("upper", 1, 3)'</span>)
Mock.mock(<span class="hljs-string">'@string("number", 1, 3)'</span>)
Mock.mock(<span class="hljs-string">'@string("symbol", 1, 3)'</span>)
Mock.mock(<span class="hljs-string">'@string("aeiou", 1, 3)'</span>)
</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div>
                                            <pre><code class="javascript hljs"><span class="hljs-comment">// Random.string()</span>
<span class="hljs-string">"ylX"</span>
<span class="hljs-string">"W!8j"</span>
<span class="hljs-string">"laqax"</span>

<span class="hljs-comment">// Random.string( length )</span>
<span class="hljs-string">"74QV#"</span>
<span class="hljs-string">"%ZTNX"</span>

<span class="hljs-comment">// Random.string( pool, length )</span>
<span class="hljs-string">"lggmb"</span>
<span class="hljs-string">"CKLXW"</span>
<span class="hljs-string">"89613"</span>
<span class="hljs-string">"#)@]*"</span>
<span class="hljs-string">"aiiau"</span>

<span class="hljs-string">"vafyr"</span>
<span class="hljs-string">"NPFTF"</span>
<span class="hljs-string">"35899"</span>
<span class="hljs-string">"(^$@&amp;"</span>
<span class="hljs-string">"oiaii"</span>

<span class="hljs-comment">// Random.string( min, max )</span>
<span class="hljs-string">"kuBIAL9!L"</span>
<span class="hljs-string">"n70P(&amp;VM"</span>

<span class="hljs-comment">// Random.string( pool, min, max )</span>
<span class="hljs-string">"xyt"</span>
<span class="hljs-string">"B"</span>
<span class="hljs-string">"0"</span>
<span class="hljs-string">"^"</span>
<span class="hljs-string">"o"</span>

<span class="hljs-string">"sy"</span>
<span class="hljs-string">"LX"</span>
<span class="hljs-string">"344"</span>
<span class="hljs-string">"])"</span>
<span class="hljs-string">"uu"</span>
</code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.range(start?, stop, step?)"><code>Random.range(start?, stop,
          step?)</code></div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.range( stop )</span>
Random.range(<span class="hljs-number">10</span>)
Mock.mock(<span class="hljs-string">'@range(10)'</span>)

<span class="hljs-comment">// Random.range( start, stop )</span>
Random.range(<span class="hljs-number">3</span>, <span class="hljs-number">7</span>)
Mock.mock(<span class="hljs-string">'@range(3, 7)'</span>)

<span class="hljs-comment">// Random.range( start, stop, step )</span>
Random.range(<span class="hljs-number">1</span>, <span class="hljs-number">10</span>, <span class="hljs-number">2</span>)
Random.range(<span class="hljs-number">1</span>, <span class="hljs-number">10</span>, <span class="hljs-number">3</span>)

Mock.mock(<span class="hljs-string">'@range(1, 10, 2)'</span>)
Mock.mock(<span class="hljs-string">'@range(1, 10, 3)'</span>)</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div>
                                            <pre><code class="javascript hljs"><span class="hljs-comment">// Random.range( stop )</span>
[<span class="hljs-number">0</span>,<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span
                                                  class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span
                                                  class="hljs-number">5</span>,<span class="hljs-number">6</span>,<span
                                                  class="hljs-number">7</span>,<span class="hljs-number">8</span>,<span
                                                  class="hljs-number">9</span>]
[<span class="hljs-number">0</span>,<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span
                                                  class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span
                                                  class="hljs-number">5</span>,<span class="hljs-number">6</span>,<span
                                                  class="hljs-number">7</span>,<span class="hljs-number">8</span>,<span
                                                  class="hljs-number">9</span>]

<span class="hljs-comment">// Random.range( start, stop )</span>
[<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>,<span
                                                  class="hljs-number">6</span>]
[<span class="hljs-number">3</span>,<span class="hljs-number">4</span>,<span class="hljs-number">5</span>,<span
                                                  class="hljs-number">6</span>]

<span class="hljs-comment">// Random.range( start, stop, step )</span>
[<span class="hljs-number">1</span>,<span class="hljs-number">3</span>,<span class="hljs-number">5</span>,<span
                                                  class="hljs-number">7</span>,<span class="hljs-number">9</span>]
[<span class="hljs-number">1</span>,<span class="hljs-number">4</span>,<span class="hljs-number">7</span>]

[<span class="hljs-number">1</span>,<span class="hljs-number">3</span>,<span class="hljs-number">5</span>,<span
                                                  class="hljs-number">7</span>,<span class="hljs-number">9</span>]
[<span class="hljs-number">1</span>,<span class="hljs-number">4</span>,<span class="hljs-number">7</span>]</code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mb20">
      <div class="fontsize-16 mb20" id="Date">Date</div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.date( format? )"><code>Random.date( format? )</code></div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.date()</span>
Random.date()
Mock.mock(<span class="hljs-string">'@date'</span>)
Mock.mock(<span class="hljs-string">'@date()'</span>)

<span class="hljs-comment">// Random.date( format )</span>
Random.date(<span class="hljs-string">'yyyy-MM-dd'</span>)
Random.date(<span class="hljs-string">'yy-MM-dd'</span>)
Random.date(<span class="hljs-string">'y-MM-dd'</span>)
Random.date(<span class="hljs-string">'y-M-d'</span>)

Mock.mock(<span class="hljs-string">'@date("yyyy-MM-dd")'</span>)
Mock.mock(<span class="hljs-string">'@date("yy-MM-dd")'</span>)
Mock.mock(<span class="hljs-string">'@date("y-MM-dd")'</span>)
Mock.mock(<span class="hljs-string">'@date("y-M-d")'</span>)

Mock.mock(<span class="hljs-string">'@date("yyyy yy y MM M dd d")'</span>)</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div>
                                            <pre><code class="javascript hljs"><span class="hljs-comment">// Random.date()</span>
<span class="hljs-string">"1972-02-01"</span>
<span class="hljs-string">"1973-02-03"</span>
<span class="hljs-string">"2014-07-16"</span>

<span class="hljs-comment">// Random.date( format )</span>
<span class="hljs-string">"2006-02-09"</span>
<span class="hljs-string">"99-08-12"</span>
<span class="hljs-string">"00-08-15"</span>
<span class="hljs-string">"93-6-12"</span>

<span class="hljs-string">"1976-07-20"</span>
<span class="hljs-string">"89-08-09"</span>
<span class="hljs-string">"97-11-14"</span>
<span class="hljs-string">"06-5-28"</span>

<span class="hljs-string">"1979 79 79 08 8 16 16"</span></code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.time( format? )"><code>Random.time( format? )</code></div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.time()</span>
Random.time()
Mock.mock(<span class="hljs-string">'@time'</span>)
Mock.mock(<span class="hljs-string">'@time()'</span>)

<span class="hljs-comment">// Random.time( format )</span>
Random.time(<span class="hljs-string">'A HH:mm:ss'</span>)
Random.time(<span class="hljs-string">'a HH:mm:ss'</span>)
Random.time(<span class="hljs-string">'HH:mm:ss'</span>)
Random.time(<span class="hljs-string">'H:m:s'</span>)

Mock.mock(<span class="hljs-string">'@time("A HH:mm:ss")'</span>)
Mock.mock(<span class="hljs-string">'@time("a HH:mm:ss")'</span>)
Mock.mock(<span class="hljs-string">'@time("HH:mm:ss")'</span>)
Mock.mock(<span class="hljs-string">'@time("H:m:s")'</span>)

Mock.mock(<span class="hljs-string">'@datetime("HH H hh h mm m ss s SS S A a T")'</span>)</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div>
                                            <pre><code class="javascript hljs"><span class="hljs-comment">// Random.time()</span>
<span class="hljs-string">"00:42:50"</span>
<span class="hljs-string">"03:33:01"</span>
<span class="hljs-string">"19:48:44"</span>

<span class="hljs-comment">// Random.time( format )</span>
<span class="hljs-string">"AM 04:10:47"</span>
<span class="hljs-string">"pm 21:29:32"</span>
<span class="hljs-string">"21:58:11"</span>
<span class="hljs-string">"7:14:13"</span>

<span class="hljs-string">"PM 13:59:29"</span>
<span class="hljs-string">"pm 20:21:18"</span>
<span class="hljs-string">"05:36:44"</span>
<span class="hljs-string">"2:57:23"</span>

<span class="hljs-string">"00 0 00 0 47 47 20 20 287 287 AM am 520620440287"</span></code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.datetime( format? )"><code>Random.datetime( format? )</code></div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.datetime()</span>
Random.datetime()
Mock.mock(<span class="hljs-string">'@datetime'</span>)
Mock.mock(<span class="hljs-string">'@datetime()'</span>)

<span class="hljs-comment">// Random.datetime( format )</span>
Random.datetime(<span class="hljs-string">'yyyy-MM-dd A HH:mm:ss'</span>)
Random.datetime(<span class="hljs-string">'yy-MM-dd a HH:mm:ss'</span>)
Random.datetime(<span class="hljs-string">'y-MM-dd HH:mm:ss'</span>)
Random.datetime(<span class="hljs-string">'y-M-d H:m:s'</span>)

Mock.mock(<span class="hljs-string">'@datetime("yyyy-MM-dd A HH:mm:ss")'</span>)
Mock.mock(<span class="hljs-string">'@datetime("yy-MM-dd a HH:mm:ss")'</span>)
Mock.mock(<span class="hljs-string">'@datetime("y-MM-dd HH:mm:ss")'</span>)
Mock.mock(<span class="hljs-string">'@datetime("y-M-d H:m:s")'</span>)

Mock.mock(<span class="hljs-string">'@datetime("yyyy yy y MM M dd d HH H hh h mm m ss s SS S A a T")'</span>)</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div>
                                            <pre><code class="javascript hljs"><span class="hljs-comment">// Random.datetime()</span>
<span class="hljs-string">"1987-03-14 11:19:51"</span>
<span class="hljs-string">"2002-04-14 14:57:25"</span>
<span class="hljs-string">"1995-04-29 23:46:29"</span>

<span class="hljs-comment">// Random.datetime( format )</span>
<span class="hljs-string">"1987-03-16 AM 08:43:14"</span>
<span class="hljs-string">"85-11-10 am 08:58:38"</span>
<span class="hljs-string">"00-10-18 06:25:47"</span>
<span class="hljs-string">"91-5-7 21:35:5"</span>

<span class="hljs-string">"1991-04-20 PM 22:40:01"</span>
<span class="hljs-string">"83-04-02 pm 23:07:33"</span>
<span class="hljs-string">"93-04-19 12:26:30"</span>
<span class="hljs-string">"07-10-14 0:9:13"</span>

<span class="hljs-string">"1984 84 84 08 8 25 25 09 9 09 9 42 42 59 59 559 559 AM am 462246179559"</span></code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.now( unit?, format? )"><code>Random.now( unit?, format? )</code></div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Ranndom.now()</span>
Random.now()
Mock.mock(<span class="hljs-string">'@now'</span>)
Mock.mock(<span class="hljs-string">'@now()'</span>)

<span class="hljs-comment">// Ranndom.now( unit )</span>
Random.now(<span class="hljs-string">'year'</span>)
Random.now(<span class="hljs-string">'month'</span>)
Random.now(<span class="hljs-string">'week'</span>)
Random.now(<span class="hljs-string">'day'</span>)
Random.now(<span class="hljs-string">'hour'</span>)
Random.now(<span class="hljs-string">'minute'</span>)
Random.now(<span class="hljs-string">'second'</span>)

<span class="hljs-comment">// Ranndom.now( format )</span>
Random.now(<span class="hljs-string">'yyyy-MM-dd HH:mm:ss SS'</span>)

<span class="hljs-comment">// Ranndom.now( unit, format )</span>
Random.now(<span class="hljs-string">'day'</span>, <span
                    class="hljs-string">'yyyy-MM-dd HH:mm:ss SS'</span>)</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div>
                                            <pre><code class="javascript hljs"><span class="hljs-comment">// Ranndom.now()</span>
<span class="hljs-string">"2017-01-24 09:06:53"</span>
<span class="hljs-string">"2017-01-24 09:06:53"</span>
<span class="hljs-string">"2017-01-24 09:06:53"</span>

<span class="hljs-comment">// Ranndom.now( unit )</span>
<span class="hljs-string">"2017-01-01 00:00:00"</span>
<span class="hljs-string">"2017-01-01 00:00:00"</span>
<span class="hljs-string">"2017-01-22 00:00:00"</span>
<span class="hljs-string">"2017-01-24 00:00:00"</span>
<span class="hljs-string">"2017-01-24 09:00:00"</span>
<span class="hljs-string">"2017-01-24 09:06:00"</span>
<span class="hljs-string">"2017-01-24 09:06:53"</span>

<span class="hljs-comment">// Ranndom.now( format )</span>
<span class="hljs-string">"2017-01-24 09:06:53 326"</span>

<span class="hljs-comment">// Ranndom.now( unit, format )</span>
<span class="hljs-string">"2017-01-24 00:00:00 000"</span></code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mb20">
      <div class="fontsize-16 mb20" id="Image">Image</div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.image( size?, background?, foreground?, format?, text? )"><code>Random.image(
          size?, background?, foreground?, format?, text? )</code></div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.image()</span>
Random.image()
<span class="hljs-comment">// Random.image( size )</span>
Random.image(<span class="hljs-string">'200x100'</span>)
<span class="hljs-comment">// Random.image( size, background )</span>
Random.image(<span class="hljs-string">'200x100'</span>, <span class="hljs-string">'#FF6600'</span>)
<span class="hljs-comment">// Random.image( size, background, text )</span>
Random.image(<span class="hljs-string">'200x100'</span>, <span class="hljs-string">'#4A7BF7'</span>, <span
                    class="hljs-string">'Hello'</span>)
<span class="hljs-comment">// Random.image( size, background, foreground, text )</span>
Random.image(<span class="hljs-string">'200x100'</span>, <span class="hljs-string">'#50B347'</span>, <span
                    class="hljs-string">'#FFF'</span>, <span class="hljs-string">'Mock.js'</span>)
<span class="hljs-comment">// Random.image( size, background, foreground, format, text )</span>
Random.image(<span class="hljs-string">'200x100'</span>, <span class="hljs-string">'#894FC4'</span>, <span
                    class="hljs-string">'#FFF'</span>, <span class="hljs-string">'png'</span>, <span
                    class="hljs-string">'!'</span>)</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div><img class="mb10 mr10" src="http://dummyimage.com/120x60"><img class="mb10 mr10"
                                                                                  src="http://dummyimage.com/200x100"><img
                  class="mb10 mr10" src="http://dummyimage.com/200x100/FF6600"><img class="mb10 mr10"
                                                                                    src="http://dummyimage.com/200x100/4A7BF7&amp;text=Hello"><img
                  class="mb10 mr10" src="http://dummyimage.com/200x100/50B347/FFF&amp;text=Mock.js"><img
                  class="mb10 mr10" src="http://dummyimage.com/200x100/894FC4/FFF.png&amp;text=!"></div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.dataImage( size?, text? )"><code>Random.dataImage( size?, text?
          )</code></div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.dataImage()</span>
Random.dataImage()

<span class="hljs-comment">// Random.dataImage( size )</span>
Random.dataImage(<span class="hljs-string">'200x100'</span>)

<span class="hljs-comment">// Random.dataImage( size, text )</span>
Random.dataImage(<span class="hljs-string">'200x100'</span>, <span
                    class="hljs-string">'Hello Mock.js!'</span>)</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div><img class="mb10 mr10"
                        src="data:image/png;base64,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"><img
                  class="mb10 mr10"
                  src="data:image/png;base64,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"><img
                  class="mb10 mr10"
                  src="data:image/png;base64,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">
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mb20">
      <div class="fontsize-16 mb20" id="Color">Color</div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.color()"><code>Random.color()</code></div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.color()</span>
Random.color()
Mock.mock(<span class="hljs-string">'@color'</span>)
Mock.mock(<span class="hljs-string">'@color()'</span>)</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div>
                                            <pre><code class="javascript hljs"><span class="hljs-comment">// Random.color()</span>
<span class="hljs-string">"#79f296"</span>
<span class="hljs-string">"#f2797e"</span>
<span class="hljs-string">"#79a2f2"</span></code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.hex()"><code>Random.hex()</code></div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.hex()</span>
Random.hex()
Mock.mock(<span class="hljs-string">'@hex'</span>)
Mock.mock(<span class="hljs-string">'@hex()'</span>)</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div>
                                            <pre><code class="javascript hljs"><span class="hljs-comment">// Random.hex()</span>
<span class="hljs-string">"#c5f279"</span>
<span class="hljs-string">"#f279e8"</span>
<span class="hljs-string">"#79f2d8"</span></code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.rgb()"><code>Random.rgb()</code></div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.rgb()</span>
Random.rgb()
Mock.mock(<span class="hljs-string">'@rgb'</span>)
Mock.mock(<span class="hljs-string">'@rgb()'</span>)</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div>
                                            <pre><code class="javascript hljs"><span class="hljs-comment">// Random.rgb()</span>
<span class="hljs-string">"rgb(242, 181, 121)"</span>
<span class="hljs-string">"rgb(145, 121, 242)"</span>
<span class="hljs-string">"rgb(131, 242, 121)"</span></code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.rgba()"><code>Random.rgba()</code></div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.rgba()</span>
Random.rgba()
Mock.mock(<span class="hljs-string">'@rgba'</span>)
Mock.mock(<span class="hljs-string">'@rgba()'</span>)</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div>
                                            <pre><code class="javascript hljs"><span class="hljs-comment">// Random.rgba()</span>
<span class="hljs-string">"rgba(242, 121, 167, 0.44)"</span>
<span class="hljs-string">"rgba(121, 202, 242, 0.31)"</span>
<span class="hljs-string">"rgba(237, 242, 121, 0.68)"</span></code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.hsl()"><code>Random.hsl()</code></div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.hsl()</span>
Random.hsl()
Mock.mock(<span class="hljs-string">'@hsl'</span>)
Mock.mock(<span class="hljs-string">'@hsl()'</span>)</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div>
                                            <pre><code class="javascript hljs"><span class="hljs-comment">// Random.hsl()</span>
<span class="hljs-string">"hsl(284, 82, 71)"</span>
<span class="hljs-string">"hsl(147, 82, 71)"</span>
<span class="hljs-string">"hsl(9, 82, 71)"</span></code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mb20">
      <div class="fontsize-16 mb20" id="Text">Text</div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.paragraph( min?, max? )"><code>Random.paragraph( min?, max? )</code>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.paragraph()</span>
Random.paragraph()

Mock.mock(<span class="hljs-string">'@paragraph'</span>)

Mock.mock(<span class="hljs-string">'@paragraph()'</span>)

<span class="hljs-comment">// Random.paragraph( len )</span>
Random.paragraph(<span class="hljs-number">2</span>)

Mock.mock(<span class="hljs-string">'@paragraph(2)'</span>)

<span class="hljs-comment">// Random.paragraph( min, max )</span>
Random.paragraph(<span class="hljs-number">1</span>, <span class="hljs-number">3</span>)

Mock.mock(<span class="hljs-string">'@paragraph(1, 3)'</span>)
</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div>
                                            <pre><code class="javascript hljs"><span class="hljs-comment">// Random.paragraph()</span>
<span class="hljs-string">"Patgevwcs khrltwyn btzsetevbw lkm nwevytqoi kvimue vcmoso csqbyf nzh dpukeib sfhtba lpricsv hgsykxkdl sljspppu gyr. Edmbhou ybcdxad quwxyhu ckpj srylkzqq urxn tfhmldkt rjaesdxh bhxewqg mtkbq tokhxno mhlcovt gjuizcz clqj ogztuytof ybmibeur iihj. Ltxruyvel syeanxragy hhonpfc vvwshguoo hbcuqhb bpynv kyvdomhjyy hhnbjcnc ktnpw gtctksz snafc tynyivrtn ogtelmr gloxtxaj eoff itjjfftx. Auczlm megm skbmxjvmwh xyhcn kvhkjptoe iuvtro ndukqjb egfaws txcraqi stahib pjmd vgevpvwie gjkrut."</span>

<span class="hljs-string">"Gwhlcbjvj uuselue btbbxyu vaaxnjjhg htlipgcme frcnnffelj jheyjvzs afxfhx sxdnsjyks dtvlmqk srjt smjqtsrw ndvy. Tnu syoq xvqf aibbt hxyvqpud qtfiyabg jdvmfd sltoexmwo olvpv aizaplzx vythkkpu objdu jkeeujau mwbwwhc burdhlgqf. Ekgkec kgukm acnwi ipnvnoege qtrd zuos qpdxix thvg spqeryyqel jllrcxjr mjbomc ehp msaifowg kvvursfng jheeixu bmzhnqx kcsaya gmlbqvgn."</span>

<span class="hljs-string">"Vozmfeqib kbwysy ghpy yoijgccfan jlzcbux fgtgu woihz fqbmpgi qldsoqn oyhhqdxb bckfgxi wbvdnqoft hrkxcr pkzx. Vnjnuux gwwicg jdpbukh gtnsgp pcfptiqu wcxehgullm tlxtdyjj cogf ooqeouz gowskzey vjlnlpc ceze jsqipih ieqoq qipwdcy gvzuqeaf. Etqqepwc fvadxvtp szkofyusz rftzhm bdk dndkykhnj xdnqtjktn giaq pcx geirst cthwqewvo uiexqylq kdoyn fwqn ivbuwzst nvkirubguu sfz dmepzy. Kdhf wtghcdwr ehfdj vpksr oitscrqyoj wgdgvkvv fuef hiidj ommybn xemi fwiy qpiiodfyb csrfhwirm uctvzn. Hnegzfdpgl jaqmgtq whxobm yvc nokluxv aizrd acs rpqerbjelo hyrikuaxj gnio dhgib egbeur ebnvnsbk lcax nafrhw."</span>

<span class="hljs-comment">// Random.paragraph( len )</span>
<span class="hljs-string">"Lyshtx ryot hgx urlifg zciatr tplc wmsft trlk cplqv wkv oikqkjv ohnc mggs tbgkbck cvtbip iiybqhtoc wskndg ijoujniy. Kjejjongkl mxjwsdxf xrj dfztdck waltcazghr qhilycmkrt ghrhibz upjpgblc szckmrfmjm uqrud vbribfonhs sthhdwxw xdgx ctxsvnz fdjox xzhhvu wggdxw."</span>

<span class="hljs-string">"Ekcragexa exqsp qfyjnml guzvqs isqevd qjydfqlgk psqr hqfcmyul uxxwahk ssljf otfdobnb wpiwmhmer iaxpmtz jwwkguohh ouyq rrqrxqjfv. Imyjshran qmezccki smsavyddj wxwrilyzq vvsvrl afpouw zhcx hyrsxe myfih kocjhi samwgcjesv ehnxocpex."</span>

<span class="hljs-comment">// Random.paragraph( min, max )</span>
<span class="hljs-string">"Rizcytnrm jtbscrukcp cxibbdbza nmckj hhnb xpsk feuat ogobniy fzxoygtr fxchtkemks bqswuupsah eotowj vyl dhqvtyqbmx zhxxlq. Olsh gsdx pbxj mweov xwbepkldqh aormlji shgb uwlfuz klm barsyzd irkl qrlvhve edjgvkpgbf."</span>

<span class="hljs-string">"Yhfsq jcpcf xnnriami yuglqzs rcth lsaw lfwel kkadchxo qlmlvhyn duhpfdgsll ngyj jvjrtnvz ogqfruvr crngjme iivka qmnvvnto bnviqmpqhh. Vjyfqx jjkid dpmzmzow pxpgfywgep vlfomb fimuslnod utfgk jlae gkrlc prdstof dxbn uwza brem. Snfnmzix scdtimrdfw bnkvtqkkb ciut opejqij eenrk jkesseeckm tvswllf fudmfcksk dglizorsd hof tshtgqo zoyujgqndk."</span>
</code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.sentence( min?, max? )"><code>Random.sentence( min?, max? )</code>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.sentence()</span>
Random.sentence()
Mock.mock(<span class="hljs-string">'@sentence'</span>)
Mock.mock(<span class="hljs-string">'@sentence()'</span>)

<span class="hljs-comment">// Random.sentence( len )</span>
Random.sentence(<span class="hljs-number">5</span>)
Mock.mock(<span class="hljs-string">'@sentence(5)'</span>)

<span class="hljs-comment">// Random.sentence( min, max )</span>
Random.sentence(<span class="hljs-number">3</span>, <span class="hljs-number">5</span>)
Mock.mock(<span class="hljs-string">'@sentence(3, 5)'</span>)
</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div>
                                            <pre><code class="javascript hljs"><span class="hljs-comment">// Random.sentence()</span>
<span class="hljs-string">"Rknqjpvc mqmao icdbxjp xunypclb jdyv ohonkqo nnhonbmw rxdn qlbmffkp fdrx qsvuebi ixylioiyt vtjfoi cwkgwtvthi dxpymsoq."</span>
<span class="hljs-string">"Rfjkin kdovl szoj edryohzel xjkv yesbp khvoefddt epswvzqghh alnhir imudgmw drthcmqf jypdwvelv gblwuxgsd nthwdy qye."</span>
<span class="hljs-string">"Dpqyow tmmipc zpns osng dxvx jddptpfo ijhuxltv onvq bqrnww rbmot qkt okewzwpyof."</span>

<span class="hljs-comment">// Random.sentence( len )</span>
<span class="hljs-string">"Oyjiv thfyqcqhg qpbnfvf bwydjpwb vclpgilnq."</span>
<span class="hljs-string">"Cftwnvcrdx yfdvk fsjbkdvdwk funwvyt ynvigy."</span>

<span class="hljs-comment">// Random.sentence( min, max )</span>
<span class="hljs-string">"Wbuylscr kmdd xhrrmt."</span>
<span class="hljs-string">"Onf ztpkq jlkfywb ttccwgmf."</span>
</code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.word( min?, max? )"><code>Random.word( min?, max? )</code></div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.word()</span>
Random.word()
Mock.mock(<span class="hljs-string">'@word'</span>)
Mock.mock(<span class="hljs-string">'@word()'</span>)

<span class="hljs-comment">// Random.word( len )</span>
Random.word(<span class="hljs-number">5</span>)
Mock.mock(<span class="hljs-string">'@word(5)'</span>)

<span class="hljs-comment">// Random.word( min, max )</span>
Random.word(<span class="hljs-number">3</span>, <span class="hljs-number">5</span>)
Mock.mock(<span class="hljs-string">'@word(3, 5)'</span>)
</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div>
                                            <pre><code class="javascript hljs"><span class="hljs-comment">// Random.word()</span>
<span class="hljs-string">"ccdasx"</span>
<span class="hljs-string">"uuaapjx"</span>
<span class="hljs-string">"mhsjsmujgr"</span>

<span class="hljs-comment">// Random.word( len )</span>
<span class="hljs-string">"wkbso"</span>
<span class="hljs-string">"czyjf"</span>

<span class="hljs-comment">// Random.word( min, max )</span>
<span class="hljs-string">"yom"</span>
<span class="hljs-string">"cyq"</span>
</code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.title( min?, max? )"><code>Random.title( min?, max? )</code></div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.title()</span>
Random.title()
Mock.mock(<span class="hljs-string">'@title'</span>)
Mock.mock(<span class="hljs-string">'@title()'</span>)

<span class="hljs-comment">// Random.title( len )</span>
Random.title(<span class="hljs-number">5</span>)
Mock.mock(<span class="hljs-string">'@title(5)'</span>)

<span class="hljs-comment">// Random.title( min, max )</span>
Random.title(<span class="hljs-number">3</span>, <span class="hljs-number">5</span>)
Mock.mock(<span class="hljs-string">'@title(3, 5)'</span>)
</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div>
                                            <pre><code class="javascript hljs"><span class="hljs-comment">// Random.title()</span>
<span class="hljs-string">"Ijyjnyrfq Qbsjqb Gqwasu Mjw Pvqbtt Lmwz"</span>
<span class="hljs-string">"Pjpw Zoovx Fbshpbr Bxybqqeocm"</span>
<span class="hljs-string">"Gbtowtnm Voljgk Aqgnboq Yphyivju Vxexcfjg"</span>

<span class="hljs-comment">// Random.title( len )</span>
<span class="hljs-string">"Ldgl Avcxnqokb Hqzr Oxq Xtxz"</span>
<span class="hljs-string">"Vzpwz Wnc Euupsr Mdyfq Lubr"</span>

<span class="hljs-comment">// Random.title( min, max )</span>
<span class="hljs-string">"Zyo Otykpt Qhkoqlu Mhiopk"</span>
<span class="hljs-string">"Osdwgb Qwbdjhc Qjqgt"</span>
</code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.cparagraph( min?, max? )"><code>Random.cparagraph( min?, max? )</code>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.cparagraph()</span>
Random.cparagraph()

Mock.mock(<span class="hljs-string">'@cparagraph'</span>)

Mock.mock(<span class="hljs-string">'@cparagraph()'</span>)

<span class="hljs-comment">// Random.cparagraph( len )</span>
Random.cparagraph(<span class="hljs-number">2</span>)

Mock.mock(<span class="hljs-string">'@cparagraph(2)'</span>)

<span class="hljs-comment">// Random.cparagraph( min, max )</span>
Random.cparagraph(<span class="hljs-number">1</span>, <span class="hljs-number">3</span>)

Mock.mock(<span class="hljs-string">'@cparagraph(1, 3)'</span>)
</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div>
                                            <pre><code class="javascript hljs"><span class="hljs-comment">// Random.cparagraph()</span>
<span class="hljs-string">"权观展查界林他信什人整空深。能之存中张众时米酸路六电次队照。按严结他先划红形建识统亲作太。起年计南第民元图文油千国整特反界程直。"</span>

<span class="hljs-string">"完离加亲少员住信被七政目记采张单。所区技理住王六身交以从头什心风际。名全门特史局没金下社人样增江金。式没公体劳这对报共因去目。由布完主三因头示花学正越身历织即。重示流部万织称太过许资即地难采委位。"</span>

<span class="hljs-string">"京六如近达府最民分接南都打。管区色称内石层色在然内龙况。动组听组类了名响形值战马林为论国。于用命整石等想信国什门万因改解什处张。片下将个精样火适较又消美万就民。决她土始验克整准王质研先元见。"</span>

<span class="hljs-comment">// Random.cparagraph( len )</span>
<span class="hljs-string">"前建重学美研将展直所目完真快变取。内育原五先因电织领红会命。"</span>

<span class="hljs-string">"要新直反年使存县都件得性包八两其代。生五回作并月许程增省压东理光后离。"</span>

<span class="hljs-comment">// Random.cparagraph( min, max )</span>
<span class="hljs-string">"观派己有劳日技段真历积入今正。"</span>

<span class="hljs-string">"节化火向马布建意会研有团厂及专情角。情容支建立住事说并级计界导三光王特品。战每接价并近统九没须候金战备动光。"</span>
</code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.csentence( min?, max? )"><code>Random.csentence( min?, max? )</code>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.csentence()</span>
Random.csentence()
Mock.mock(<span class="hljs-string">'@csentence'</span>)
Mock.mock(<span class="hljs-string">'@csentence()'</span>)

<span class="hljs-comment">// Random.csentence( len )</span>
Random.csentence(<span class="hljs-number">5</span>)
Mock.mock(<span class="hljs-string">'@csentence(5)'</span>)

<span class="hljs-comment">// Random.csentence( min, max )</span>
Random.csentence(<span class="hljs-number">3</span>, <span class="hljs-number">5</span>)
Mock.mock(<span class="hljs-string">'@csentence(3, 5)'</span>)
</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div>
                                            <pre><code class="javascript hljs"><span class="hljs-comment">// Random.csentence()</span>
<span class="hljs-string">"进六中干须元头论定立月来一。"</span>
<span class="hljs-string">"如快整般后因他变部照养增。"</span>
<span class="hljs-string">"何更共术由地连线六己行重标做。"</span>

<span class="hljs-comment">// Random.csentence( len )</span>
<span class="hljs-string">"后转员何此。"</span>
<span class="hljs-string">"放手算安学。"</span>

<span class="hljs-comment">// Random.csentence( min, max )</span>
<span class="hljs-string">"影几个半。"</span>
<span class="hljs-string">"性族传。"</span>
</code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.cword( pool?, min?, max? )"><code>Random.cword( pool?, min?, max?
          )</code></div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.cword()</span>
Random.cword()
Mock.mock(<span class="hljs-string">'@cword'</span>)
Mock.mock(<span class="hljs-string">'@cword()'</span>)

<span class="hljs-comment">// Random.cword( pool )</span>
Random.cword(<span class="hljs-string">'零一二三四五六七八九十'</span>)
Mock.mock(<span class="hljs-string">'@cword("零一二三四五六七八九十")'</span>)

<span class="hljs-comment">// Random.cword( length )</span>
Random.cword(<span class="hljs-number">3</span>)
Mock.mock(<span class="hljs-string">'@cword(3)'</span>)

<span class="hljs-comment">// Random.cword( pool, length )</span>
Random.cword(<span class="hljs-string">'零一二三四五六七八九十'</span>, <span class="hljs-number">3</span>)
Mock.mock(<span class="hljs-string">'@cword("零一二三四五六七八九十", 3)'</span>)

<span class="hljs-comment">// Random.cword( min, max )</span>
Random.cword(<span class="hljs-number">3</span>, <span class="hljs-number">5</span>)
Mock.mock(<span class="hljs-string">'@cword(3, 5)'</span>)

<span class="hljs-comment">// Random.cword( pool, min, max )</span>
Random.cword(<span class="hljs-string">'零一二三四五六七八九十'</span>, <span class="hljs-number">5</span>, <span
                    class="hljs-number">7</span>)
Mock.mock(<span class="hljs-string">'@cword("零一二三四五六七八九十", 5, 7)'</span>)</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div>
                                            <pre><code class="javascript hljs"><span class="hljs-comment">// Random.cword()</span>
<span class="hljs-string">"民"</span>
<span class="hljs-string">"使"</span>
<span class="hljs-string">"导"</span>

<span class="hljs-comment">// Random.cword( pool )</span>
<span class="hljs-string">"零"</span>
<span class="hljs-string">"八"</span>

<span class="hljs-comment">// Random.cword( length )</span>
<span class="hljs-string">"强斗南"</span>
<span class="hljs-string">"员阶质"</span>

<span class="hljs-comment">// Random.cword( pool, length )</span>
<span class="hljs-string">"三五四"</span>
<span class="hljs-string">"二二三"</span>

<span class="hljs-comment">// Random.cword( min, max )</span>
<span class="hljs-string">"则场通手等"</span>
<span class="hljs-string">"性开事"</span>

<span class="hljs-comment">// Random.cword( pool, min, max )</span>
<span class="hljs-string">"七一三六三五"</span>
<span class="hljs-string">"一六四四九七"</span></code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.ctitle( min?, max? )"><code>Random.ctitle( min?, max? )</code></div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.ctitle()</span>
Random.ctitle()
Mock.mock(<span class="hljs-string">'@ctitle'</span>)
Mock.mock(<span class="hljs-string">'@ctitle()'</span>)

<span class="hljs-comment">// Random.ctitle( len )</span>
Random.ctitle(<span class="hljs-number">5</span>)
Mock.mock(<span class="hljs-string">'@ctitle(5)'</span>)

<span class="hljs-comment">// Random.ctitle( min, max )</span>
Random.ctitle(<span class="hljs-number">3</span>, <span class="hljs-number">5</span>)
Mock.mock(<span class="hljs-string">'@ctitle(3, 5)'</span>)
</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div>
                                            <pre><code class="javascript hljs"><span class="hljs-comment">// Random.ctitle()</span>
<span class="hljs-string">"定回示十过式"</span>
<span class="hljs-string">"油必你生空"</span>
<span class="hljs-string">"越到影况"</span>

<span class="hljs-comment">// Random.ctitle( len )</span>
<span class="hljs-string">"效调收决东"</span>
<span class="hljs-string">"没当两平和"</span>

<span class="hljs-comment">// Random.ctitle( min, max )</span>
<span class="hljs-string">"有以实什"</span>
<span class="hljs-string">"门报及市"</span>
</code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mb20">
      <div class="fontsize-16 mb20" id="Name">Name</div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.first()"><code>Random.first()</code></div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.first()</span>
Random.first()
Mock.mock(<span class="hljs-string">'@first'</span>)
Mock.mock(<span class="hljs-string">'@first()'</span>)</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div>
                                            <pre><code class="javascript hljs"><span class="hljs-comment">// Random.first()</span>
<span class="hljs-string">"Jessica"</span>
<span class="hljs-string">"Karen"</span>
<span class="hljs-string">"Charles"</span></code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.last()"><code>Random.last()</code></div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.last()</span>
Random.last()
Mock.mock(<span class="hljs-string">'@last'</span>)
Mock.mock(<span class="hljs-string">'@last()'</span>)</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div>
                                            <pre><code class="javascript hljs"><span class="hljs-comment">// Random.last()</span>
<span class="hljs-string">"Jones"</span>
<span class="hljs-string">"Lopez"</span>
<span class="hljs-string">"Walker"</span></code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.name( middle? )"><code>Random.name( middle? )</code></div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.name()</span>
Random.name()
Mock.mock(<span class="hljs-string">'@name'</span>)
Mock.mock(<span class="hljs-string">'@name()'</span>)

<span class="hljs-comment">// Random.name( middle )</span>
Random.name(<span class="hljs-literal">true</span>)
Mock.mock(<span class="hljs-string">'@name(true)'</span>)</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div>
                                            <pre><code class="javascript hljs"><span class="hljs-comment">// Random.name()</span>
<span class="hljs-string">"Richard Jackson"</span>
<span class="hljs-string">"William Brown"</span>
<span class="hljs-string">"Deborah Jones"</span>

<span class="hljs-comment">// Random.name( middle )</span>
<span class="hljs-string">"Larry Donna Martinez"</span>
<span class="hljs-string">"Angela Paul Wilson"</span></code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.cfirst()"><code>Random.cfirst()</code></div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.cfirst()</span>
Random.cfirst()
Mock.mock(<span class="hljs-string">'@cfirst'</span>)
Mock.mock(<span class="hljs-string">'@cfirst()'</span>)</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div>
                                            <pre><code class="javascript hljs"><span class="hljs-comment">// Random.cfirst()</span>
<span class="hljs-string">"乔"</span>
<span class="hljs-string">"康"</span>
<span class="hljs-string">"龙"</span></code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.clast()"><code>Random.clast()</code></div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.clast()</span>
Random.clast()
Mock.mock(<span class="hljs-string">'@clast'</span>)
Mock.mock(<span class="hljs-string">'@clast()'</span>)</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div>
                                            <pre><code class="javascript hljs"><span class="hljs-comment">// Random.clast()</span>
<span class="hljs-string">"强"</span>
<span class="hljs-string">"静"</span>
<span class="hljs-string">"洋"</span></code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.cname()"><code>Random.cname()</code></div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.cname()</span>
Random.cname()
Mock.mock(<span class="hljs-string">'@cname'</span>)
Mock.mock(<span class="hljs-string">'@cname()'</span>)</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div>
                                            <pre><code class="javascript hljs"><span class="hljs-comment">// Random.cname()</span>
<span class="hljs-string">"许明"</span>
<span class="hljs-string">"梁秀英"</span>
<span class="hljs-string">"赵芳"</span></code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mb20">
      <div class="fontsize-16 mb20" id="Web">Web</div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.url()"><code>Random.url()</code></div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.url()</span>
Random.url()
Mock.mock(<span class="hljs-string">'@url'</span>)
Mock.mock(<span class="hljs-string">'@url()'</span>)</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div>
                                            <pre><code class="javascript hljs"><span class="hljs-comment">// Random.url()</span>
<span class="hljs-string">"tn3270://dwq.ma/rstx"</span>
<span class="hljs-string">"cid://lptbesv.lt/mzuosnsevf"</span>
<span class="hljs-string">"tn3270://rcdnx.la/lrdohf"</span></code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.domain()"><code>Random.domain()</code></div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.domain()</span>
Random.domain()
Mock.mock(<span class="hljs-string">'@domain'</span>)
Mock.mock(<span class="hljs-string">'@domain()'</span>)</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div>
                                            <pre><code class="javascript hljs"><span class="hljs-comment">// Random.domain()</span>
<span class="hljs-string">"jlntj.br"</span>
<span class="hljs-string">"mbswq.gt"</span>
<span class="hljs-string">"ggnqpkpyqg.zm"</span></code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.protocol()"><code>Random.protocol()</code></div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.protocol()</span>
Random.protocol()
Mock.mock(<span class="hljs-string">'@protocol'</span>)
Mock.mock(<span class="hljs-string">'@protocol()'</span>)</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div>
                                            <pre><code class="javascript hljs"><span class="hljs-comment">// Random.protocol()</span>
<span class="hljs-string">"tn3270"</span>
<span class="hljs-string">"gopher"</span>
<span class="hljs-string">"prospero"</span></code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.tld()"><code>Random.tld()</code></div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.tld()</span>
Random.tld()
Mock.mock(<span class="hljs-string">'@tld'</span>)
Mock.mock(<span class="hljs-string">'@tld()'</span>)</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div>
                                            <pre><code class="javascript hljs"><span class="hljs-comment">// Random.tld()</span>
<span class="hljs-string">"as"</span>
<span class="hljs-string">"sa"</span>
<span class="hljs-string">"biz"</span></code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.email()"><code>Random.email()</code></div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.email()</span>
Random.email()
Mock.mock(<span class="hljs-string">'@email'</span>)
Mock.mock(<span class="hljs-string">'@email()'</span>)</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div>
                                            <pre><code class="javascript hljs"><span class="hljs-comment">// Random.email()</span>
<span class="hljs-string">"t.tmikfjg@tlvrkygrn.is"</span>
<span class="hljs-string">"f.dbylqh@gkjgnenhs.ir"</span>
<span class="hljs-string">"v.dchnxg@avbhmst.tv"</span></code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.ip()"><code>Random.ip()</code></div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.ip()</span>
Random.ip()
Mock.mock(<span class="hljs-string">'@ip'</span>)
Mock.mock(<span class="hljs-string">'@ip()'</span>)</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div>
                                            <pre><code class="javascript hljs"><span
                                                class="hljs-comment">// Random.ip()</span>
<span class="hljs-string">"192.126.205.192"</span>
<span class="hljs-string">"251.5.77.113"</span>
<span class="hljs-string">"4.55.241.64"</span></code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mb20">
      <div class="fontsize-16 mb20" id="Address">Address</div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.region()"><code>Random.region()</code></div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.region()</span>
Random.region()
Mock.mock(<span class="hljs-string">'@region'</span>)
Mock.mock(<span class="hljs-string">'@region()'</span>)</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div>
                                            <pre><code class="javascript hljs"><span class="hljs-comment">// Random.region()</span>
<span class="hljs-string">"东北"</span>
<span class="hljs-string">"东北"</span>
<span class="hljs-string">"西南"</span></code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.province()"><code>Random.province()</code></div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.province()</span>
Random.province()
Mock.mock(<span class="hljs-string">'@province'</span>)
Mock.mock(<span class="hljs-string">'@province()'</span>)</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div>
                                            <pre><code class="javascript hljs"><span class="hljs-comment">// Random.province()</span>
<span class="hljs-string">"上海"</span>
<span class="hljs-string">"甘肃省"</span>
<span class="hljs-string">"西藏自治区"</span></code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.city( prefix? )"><code>Random.city( prefix? )</code></div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.city()</span>
Random.city()
Mock.mock(<span class="hljs-string">'@city'</span>)
Mock.mock(<span class="hljs-string">'@city()'</span>)
<span class="hljs-comment">// Random.city( prefix )</span>
Random.city(<span class="hljs-literal">true</span>)
Mock.mock(<span class="hljs-string">'@city(true)'</span>)</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div>
                                            <pre><code class="javascript hljs"><span class="hljs-comment">// Random.city()</span>
<span class="hljs-string">"上海市"</span>
<span class="hljs-string">"上海市"</span>
<span class="hljs-string">"庆阳市"</span>
<span class="hljs-comment">// Random.city( prefix )</span>
<span class="hljs-string">"甘肃省 临夏回族自治州"</span>
<span class="hljs-string">"陕西省 安康市"</span></code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.county( prefix? )"><code>Random.county( prefix? )</code></div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.county()</span>
Random.county()
Mock.mock(<span class="hljs-string">'@county'</span>)
Mock.mock(<span class="hljs-string">'@county()'</span>)
<span class="hljs-comment">// Random.county( prefix )</span>
Random.county(<span class="hljs-literal">true</span>)
Mock.mock(<span class="hljs-string">'@county(true)'</span>)</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div>
                                            <pre><code class="javascript hljs"><span class="hljs-comment">// Random.county()</span>
<span class="hljs-string">"贡觉县"</span>
<span class="hljs-string">"乐业县"</span>
<span class="hljs-string">"陈仓区"</span>
<span class="hljs-comment">// Random.county( prefix )</span>
<span class="hljs-string">"山东省 济宁市 邹城市"</span>
<span class="hljs-string">"河南省 漯河市 临颍县"</span></code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.zip()"><code>Random.zip()</code></div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.zip()</span>
Random.zip()
Mock.mock(<span class="hljs-string">'@zip'</span>)
Mock.mock(<span class="hljs-string">'@zip()'</span>)</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div>
                                            <pre><code class="javascript hljs"><span class="hljs-comment">// Random.zip()</span>
<span class="hljs-string">"476439"</span>
<span class="hljs-string">"574162"</span>
<span class="hljs-string">"659671"</span></code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mb20">
      <div class="fontsize-16 mb20" id="Helper">Helper</div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.capitalize( word )"><code>Random.capitalize( word )</code></div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.capitalize( word )</span>
Random.capitalize(<span class="hljs-string">'hello'</span>)
Mock.mock(<span class="hljs-string">'@capitalize("hello")'</span>)</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div>
                                            <pre><code class="javascript hljs"><span class="hljs-comment">// Random.capitalize( word )</span>
<span class="hljs-string">"Hello"</span>
<span class="hljs-string">"Hello"</span></code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.upper( str )"><code>Random.upper( str )</code></div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.upper( str )</span>
Random.upper(<span class="hljs-string">'hello'</span>)
Mock.mock(<span class="hljs-string">'@upper("hello")'</span>)</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div>
                                            <pre><code class="javascript hljs"><span class="hljs-comment">// Random.upper( str )</span>
<span class="hljs-string">"HELLO"</span>
<span class="hljs-string">"HELLO"</span></code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.lower( str )"><code>Random.lower( str )</code></div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.lower( str )</span>
Random.lower(<span class="hljs-string">'HELLO'</span>)
Mock.mock(<span class="hljs-string">'@lower("HELLO")'</span>)</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div>
                                            <pre><code class="javascript hljs"><span class="hljs-comment">// Random.lower( str )</span>
<span class="hljs-string">"hello"</span>
<span class="hljs-string">"hello"</span></code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.pick( arr )"><code>Random.pick( arr )</code></div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.pick( arr )</span>
Random.pick([<span class="hljs-string">'a'</span>, <span class="hljs-string">'e'</span>, <span
                    class="hljs-string">'i'</span>, <span class="hljs-string">'o'</span>, <span
                    class="hljs-string">'u'</span>])
Mock.mock(<span class="hljs-string">'@pick(["a", "e", "i", "o", "u"])'</span>)</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div>
                                            <pre><code class="javascript hljs"><span class="hljs-comment">// Random.pick( arr )</span>
<span class="hljs-string">"e"</span>
<span class="hljs-string">"o"</span></code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.shuffle( arr )"><code>Random.shuffle( arr )</code></div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.shuffle( arr )</span>
Random.shuffle([<span class="hljs-string">'a'</span>, <span class="hljs-string">'e'</span>, <span class="hljs-string">'i'</span>, <span
                    class="hljs-string">'o'</span>, <span class="hljs-string">'u'</span>])
Mock.mock(<span class="hljs-string">'@shuffle(["a", "e", "i", "o", "u"])'</span>)</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div>
                                            <pre><code class="javascript hljs"><span class="hljs-comment">// Random.shuffle( arr )</span>
[<span class="hljs-string">"o"</span>,<span class="hljs-string">"i"</span>,<span class="hljs-string">"e"</span>,<span
                                                  class="hljs-string">"a"</span>,<span class="hljs-string">"u"</span>]
[<span class="hljs-string">"a"</span>,<span class="hljs-string">"o"</span>,<span class="hljs-string">"i"</span>,<span
                                                  class="hljs-string">"e"</span>,<span
                                                  class="hljs-string">"u"</span>]</code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mb20">
      <div class="fontsize-16 mb20" id="Miscellaneous">Miscellaneous</div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.guid()"><code>Random.guid()</code></div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.guid()</span>
Random.guid()
Mock.mock(<span class="hljs-string">'@guid'</span>)
Mock.mock(<span class="hljs-string">'@guid()'</span>)</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div>
                                            <pre><code class="javascript hljs"><span class="hljs-comment">// Random.guid()</span>
<span class="hljs-string">"e2D26BD5-066C-5BcF-bcab-182B2d2DBdfe"</span>
<span class="hljs-string">"Bc1dFdd1-0dfD-5562-F71D-8FBc1445DC8E"</span>
<span class="hljs-string">"3C7693FE-5485-fd8c-C7Aa-5c0fA418a6d1"</span></code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.id()"><code>Random.id()</code></div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.id()</span>
Random.id()
Mock.mock(<span class="hljs-string">'@id'</span>)
Mock.mock(<span class="hljs-string">'@id()'</span>)</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div>
                                            <pre><code class="javascript hljs"><span
                                                class="hljs-comment">// Random.id()</span>
<span class="hljs-string">"540000201510119316"</span>
<span class="hljs-string">"63000019771010316X"</span>
<span class="hljs-string">"230000197606196322"</span></code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="mb20">
        <div class="fontsize-14 mb20" id="Random.increment( step? )"><code>Random.increment( step? )</code></div>
        <div class="row">
          <div class="col-sm-6">
            <div class="code">
              <span class="badge">Data Template</span>
              <pre><code class="javascript hljs"><span class="hljs-comment">// Random.increment()</span>
Random.increment()
Mock.mock(<span class="hljs-string">'@increment'</span>)
Mock.mock(<span class="hljs-string">'@increment()'</span>)

<span class="hljs-comment">// Random.increment( step )</span>
Random.increment(<span class="hljs-number">100</span>)
Mock.mock(<span class="hljs-string">'@increment(100)'</span>)
Random.increment(<span class="hljs-number">1000</span>)
Mock.mock(<span class="hljs-string">'@increment(1000)'</span>)</code></pre>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="result">
              <span class="badge">Result</span>
              <div>
                                            <pre><code class="javascript hljs"><span class="hljs-comment">// Random.increment()</span>
<span class="hljs-number">1</span>
<span class="hljs-number">2</span>
<span class="hljs-number">3</span>

<span class="hljs-comment">// Random.increment( step )</span>
<span class="hljs-number">103</span>
<span class="hljs-number">203</span>
<span class="hljs-number">1203</span>
<span class="hljs-number">2203</span></code></pre>
                <a href="javascript:;" class="mockicon rerun"></a>
              </div>

              <a href="javascript:;" class="mockicon rerun"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
</template>

<style lang="styl" rel="stylesheet/stylus" scoped type="text/stylus">

</style>

<script type="text/ecmascript-6">
  import BasePage from 'src/extend/BasePage'

  export default{
    mixins: [ BasePage ],
    components: {},
    name: 'demo_home',
    methods: {}
  }
</script>
