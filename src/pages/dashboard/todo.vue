<template>
  <div class="content-wrapper">


    <div class="flash-container flash-container-page">
    </div>


    <div class="container-fluid container-limited ">
      <div class="content">
        <ul class="nav-links">
          <li class="active">
            <a class="shortcuts-activity" data-placement="right" href="/dashboard/activity">Your Projects
            </a></li>
          <li class="">
            <a data-placement="right" href="/dashboard/activity?filter=starred">Starred Projects
            </a></li>
        </ul>

        <section class="activities">
          <div class="hidden-xs">

          </div>
          <div class="nav-block">
            <div class="controls">
              <a class="btn rss-btn" href="/dashboard/projects.atom?private_token=yfATUx1kcCzcuBAZbdyC"><i class="fa fa-rss"></i>
              </a></div>
            <ul class="nav-links event-filter scrolling-tabs">
              <li><a class="event-filter-link" id="push_event_filter" title="Filter by push events" href="/dashboard/activity"><span> Push events</span></a></li>
              <li><a class="event-filter-link" id="merged_event_filter" title="Filter by merge events" href="/dashboard/activity"><span> Merge events</span></a></li>
              <li><a class="event-filter-link" id="comments_event_filter" title="Filter by comments" href="/dashboard/activity"><span> Comments</span></a></li>
              <li><a class="event-filter-link" id="team_event_filter" title="Filter by team" href="/dashboard/activity"><span> Team</span></a></li>
            </ul>

          </div>
          <div class="content_list"><div class="event-block event-item">
            <div class="event-item-timestamp">
              <time class="js-timeago" datetime="2016-12-21T04:34:04Z" title="" data-toggle="tooltip" data-placement="top" data-container="body" data-original-title="Dec 21, 2016 4:34am">about an hour ago</time>
            </div>
            <a href="/u/Fangxianzheng"><img class="avatar has-tooltip hidden-xs s40" alt="Fangxianzheng's avatar" title="Fangxianzheng" src="http://secure.gravatar.com/avatar/17424f9a76efd0aed0932b46d1dbf5c0?s=80&amp;d=identicon"></a>
            <div class="event-title">
              <span class="author_name"><a title="Fangxianzheng" href="/u/Fangxianzheng">Fangxianzheng</a></span>
              <span class="pushed">pushed to branch</span>
              <strong>
                <a title="" href="/chonglu.wangcl/YMM-BMP/commits/dev">dev</a>
              </strong>
              <span class="event-scope">
at
<a title="YMM-BMP" href="/chonglu.wangcl/YMM-BMP"><span class="namespace-name">chonglu.wangcl / </span><span class="project-name">YMM-BMP</span></a>
</span>

            </div>
            <div class="event-body">
              <ul class="well-list event_commits">
                <li class="commit">
                  <div class="commit-row-title">
                    <a class="commit_short_id" alt="" title="dfa332dd" href="/chonglu.wangcl/YMM-BMP/commit/dfa332dd8f1d93a34db2a01ca6e37eb8fea5060c">dfa332dd</a>
                    ·
                    Merge branches '2016125_fxz_dakuan-new' and 'dev' of code.ymmoa.com...
                  </div>
                </li>

                <li class="commit">
                  <div class="commit-row-title">
                    <a class="commit_short_id" alt="" title="f0b2c3fc" href="/chonglu.wangcl/YMM-BMP/commit/f0b2c3fca3a474cea718d23312b7f79bc572a9d6">f0b2c3fc</a>
                    ·
                    打款管理 导出优化
                  </div>
                </li>

                <li class="commits-stat">
                  <a href="/chonglu.wangcl/YMM-BMP/compare/16bb853e65c8b2340d9094cfb50c329e3d73ffc7...dfa332dd8f1d93a34db2a01ca6e37eb8fea5060c">Compare 16bb853e...dfa332dd
                  </a></li>
              </ul>
            </div>

          </div>
            <div class="event-block event-item">
              <div class="event-item-timestamp">
                <time class="js-timeago" datetime="2016-12-21T04:33:14Z" title="Dec 21, 2016 4:33am" data-toggle="tooltip" data-placement="top" data-container="body">about an hour ago</time>
              </div>
              <a href="/u/Fangxianzheng"><img class="avatar has-tooltip hidden-xs s40" alt="Fangxianzheng's avatar" title="Fangxianzheng" src="http://secure.gravatar.com/avatar/17424f9a76efd0aed0932b46d1dbf5c0?s=80&amp;d=identicon"></a>
              <div class="event-title">
                <span class="author_name"><a title="Fangxianzheng" href="/u/Fangxianzheng">Fangxianzheng</a></span>
                <span class="pushed">pushed to branch</span>
                <strong>
                  <a title="" href="/chonglu.wangcl/YMM-BMP/commits/2016125_fxz_dakuan-new">2016125_fxz_dakuan-new</a>
                </strong>
                <span class="event-scope">
at
<a title="YMM-BMP" href="/chonglu.wangcl/YMM-BMP"><span class="namespace-name">chonglu.wangcl / </span><span class="project-name">YMM-BMP</span></a>
</span>

              </div>
              <div class="event-body">
                <ul class="well-list event_commits">
                  <li class="commit">
                    <div class="commit-row-title">
                      <a class="commit_short_id" alt="" title="f0b2c3fc" href="/chonglu.wangcl/YMM-BMP/commit/f0b2c3fca3a474cea718d23312b7f79bc572a9d6">f0b2c3fc</a>
                      ·
                      打款管理 导出优化
                    </div>
                  </li>

                </ul>
              </div>

            </div>
            <div class="event-block event-item">
              <div class="event-item-timestamp">
                <time class="js-timeago" datetime="2016-12-21T03:57:16Z" title="Dec 21, 2016 3:57am" data-toggle="tooltip" data-placement="top" data-container="body">about 2 hours ago</time>
              </div>
              <a href="/u/aru.pana"><img class="avatar has-tooltip hidden-xs s40" alt="PanAru's avatar" title="PanAru" src="http://secure.gravatar.com/avatar/741bdbab97eadfdd6af922a3e98977b7?s=80&amp;d=identicon"></a>
              <div class="event-title">
                <span class="author_name"><a title="PanAru" href="/u/aru.pana">PanAru</a></span>
                <span class="pushed">pushed to branch</span>
                <strong>
                  <a title="" href="/h5developer/buytruck/commits/20161220_location">20161220_location</a>
                </strong>
                <span class="event-scope">
at
<a title="buytruck" href="/h5developer/buytruck"><span class="namespace-name">h5developer / </span><span class="project-name">buytruck</span></a>
</span>

              </div>
              <div class="event-body">
                <ul class="well-list event_commits">
                  <li class="commit">
                    <div class="commit-row-title">
                      <a class="commit_short_id" alt="" title="dad4dc5a" href="/h5developer/buytruck/commit/dad4dc5ae85bce6b47866b3715c7aff4a01e9c9a">dad4dc5a</a>
                      ·
                      Merge branch 'master' of code.ymmoa.com:h5developer/buytruck into 2...
                    </div>
                  </li>

                </ul>
              </div>

            </div>
            <div class="event-block event-item">
              <div class="event-item-timestamp">
                <time class="js-timeago" datetime="2016-12-21T03:56:51Z" title="Dec 21, 2016 3:56am" data-toggle="tooltip" data-placement="top" data-container="body">about 2 hours ago</time>
              </div>
              <a href="/u/aru.pana"><img class="avatar has-tooltip hidden-xs s40" alt="PanAru's avatar" title="PanAru" src="http://secure.gravatar.com/avatar/741bdbab97eadfdd6af922a3e98977b7?s=80&amp;d=identicon"></a>
              <div class="event-title">
                <span class="author_name"><a title="PanAru" href="/u/aru.pana">PanAru</a></span>
                <span class="pushed">pushed to branch</span>
                <strong>
                  <a title="" href="/h5developer/shop/commits/20161220_location">20161220_location</a>
                </strong>
                <span class="event-scope">
at
<a title="shop" href="/h5developer/shop"><span class="namespace-name">h5developer / </span><span class="project-name">shop</span></a>
</span>

              </div>
              <div class="event-body">
                <ul class="well-list event_commits">
                  <li class="commit">
                    <div class="commit-row-title">
                      <a class="commit_short_id" alt="" title="01358958" href="/h5developer/shop/commit/01358958878e31f6c811a9335300b696069ed876">01358958</a>
                      ·
                      详情页定位问题(已修复，注释代码测试，记得删除)
                    </div>
                  </li>

                </ul>
              </div>

            </div>
            <div class="event-block event-item">
              <div class="event-item-timestamp">
                <time class="js-timeago" datetime="2016-12-21T03:29:45Z" title="Dec 21, 2016 3:29am" data-toggle="tooltip" data-placement="top" data-container="body">about 2 hours ago</time>
              </div>
              <a href="/u/aru.pana"><img class="avatar has-tooltip hidden-xs s40" alt="PanAru's avatar" title="PanAru" src="http://secure.gravatar.com/avatar/741bdbab97eadfdd6af922a3e98977b7?s=80&amp;d=identicon"></a>
              <div class="event-title">
                <span class="author_name"><a title="PanAru" href="/u/aru.pana">PanAru</a></span>
                <span class="pushed">pushed new branch</span>
                <strong>
                  <a title="" href="/h5developer/buytruck/commits/20161220_location">20161220_location</a>
                </strong>
                <span class="event-scope">
at
<a title="buytruck" href="/h5developer/buytruck"><span class="namespace-name">h5developer / </span><span class="project-name">buytruck</span></a>
</span>

              </div>
              <div class="event-body">
                <ul class="well-list event_commits">
                  <li class="commit">
                    <div class="commit-row-title">
                      <a class="commit_short_id" alt="" title="745999de" href="/h5developer/buytruck/commit/745999de227c4fe8e0cdbda5a813cf8f34cc3c9c">745999de</a>
                      ·
                      Merge branch 'master' of code.ymmoa.com:h5developer/buytruck into 2...
                    </div>
                  </li>

                  <li class="commit">
                    <div class="commit-row-title">
                      <a class="commit_short_id" alt="" title="7cabe7c9" href="/h5developer/buytruck/commit/7cabe7c99675d3580d9164e17a6b124fe774db3c">7cabe7c9</a>
                      ·
                      定位bug（已修复，测试阶段，造数据测试，记得删除）
                    </div>
                  </li>

                  <li class="commits-stat">
                    <a href="/h5developer/buytruck/compare/master...745999de227c4fe8e0cdbda5a813cf8f34cc3c9c">Compare master...745999de
                    </a><span data-display="inline" data-user-is="65">
or
<a href="/h5developer/buytruck/merge_requests/new?merge_request%5Bsource_branch%5D=20161220_location&amp;merge_request%5Btarget_branch%5D=master">create a merge request
</a></span>
                  </li>
                </ul>
              </div>

            </div>
            <div class="event-block event-item">
              <div class="event-item-timestamp">
                <time class="js-timeago" datetime="2016-12-21T03:06:51Z" title="Dec 21, 2016 3:06am" data-toggle="tooltip" data-placement="top" data-container="body">about 3 hours ago</time>
              </div>
              <a href="/u/aru.pana"><img class="avatar has-tooltip hidden-xs s40" alt="PanAru's avatar" title="PanAru" src="http://secure.gravatar.com/avatar/741bdbab97eadfdd6af922a3e98977b7?s=80&amp;d=identicon"></a>
              <div class="event-title">
                <span class="author_name"><a title="PanAru" href="/u/aru.pana">PanAru</a></span>
                <span class="pushed">pushed to branch</span>
                <strong>
                  <a title="" href="/h5developer/shop/commits/20161220_location">20161220_location</a>
                </strong>
                <span class="event-scope">
at
<a title="shop" href="/h5developer/shop"><span class="namespace-name">h5developer / </span><span class="project-name">shop</span></a>
</span>

              </div>
              <div class="event-body">
                <ul class="well-list event_commits">
                  <li class="commit">
                    <div class="commit-row-title">
                      <a class="commit_short_id" alt="" title="b2cdd4a8" href="/h5developer/shop/commit/b2cdd4a87c541118cc128ce7ac10176821e12e3c">b2cdd4a8</a>
                      ·
                      详情页定位问题(已修复，注释代码测试，记得删除)
                    </div>
                  </li>

                </ul>
              </div>

            </div>
            <div class="event-block event-item">
              <div class="event-item-timestamp">
                <time class="js-timeago" datetime="2016-12-20T12:03:52Z" title="Dec 20, 2016 12:03pm" data-toggle="tooltip" data-placement="top" data-container="body">about 18 hours ago</time>
              </div>
              <a href="/u/chonglu.wangcl"><img class="avatar has-tooltip hidden-xs s40" alt="chonglu.wangcl's avatar" title="chonglu.wangcl" src="http://secure.gravatar.com/avatar/3f9f24944d5699fa5c952288b6aa0c78?s=80&amp;d=identicon"></a>
              <div class="event-title">
                <span class="author_name"><a title="chonglu.wangcl" href="/u/chonglu.wangcl">chonglu.wangcl</a></span>
                <span class="pushed">pushed to branch</span>
                <strong>
                  <a title="" href="/chonglu.wangcl/YMM-BMP/commits/master">master</a>
                </strong>
                <span class="event-scope">
at
<a title="YMM-BMP" href="/chonglu.wangcl/YMM-BMP"><span class="namespace-name">chonglu.wangcl / </span><span class="project-name">YMM-BMP</span></a>
</span>

              </div>
              <div class="event-body">
                <ul class="well-list event_commits">
                  <li class="commit">
                    <div class="commit-row-title">
                      <a class="commit_short_id" alt="" title="b1a97153" href="/chonglu.wangcl/YMM-BMP/commit/b1a97153f50c2b03b108c8d4f2f28eaaaf9c69c5">b1a97153</a>
                      ·
                      线上打包命令
                    </div>
                  </li>

                </ul>
              </div>

            </div>
            <div class="event-block event-item">
              <div class="event-item-timestamp">
                <time class="js-timeago" datetime="2016-12-20T11:11:52Z" title="Dec 20, 2016 11:11am" data-toggle="tooltip" data-placement="top" data-container="body">about 19 hours ago</time>
              </div>
              <a href="/u/chonglu.wangcl"><img class="avatar has-tooltip hidden-xs s40" alt="chonglu.wangcl's avatar" title="chonglu.wangcl" src="http://secure.gravatar.com/avatar/3f9f24944d5699fa5c952288b6aa0c78?s=80&amp;d=identicon"></a>
              <div class="event-title">
                <span class="author_name"><a title="chonglu.wangcl" href="/u/chonglu.wangcl">chonglu.wangcl</a></span>
                <span class="pushed">pushed to branch</span>
                <strong>
                  <a title="" href="/chonglu.wangcl/YMM-BMP/commits/master">master</a>
                </strong>
                <span class="event-scope">
at
<a title="YMM-BMP" href="/chonglu.wangcl/YMM-BMP"><span class="namespace-name">chonglu.wangcl / </span><span class="project-name">YMM-BMP</span></a>
</span>

              </div>
              <div class="event-body">
                <ul class="well-list event_commits">
                  <li class="commit">
                    <div class="commit-row-title">
                      <a class="commit_short_id" alt="" title="09da81ac" href="/chonglu.wangcl/YMM-BMP/commit/09da81ac7a524c9a35c7d26a1158dbf0a64fbda4">09da81ac</a>
                      ·
                      线上打包命令
                    </div>
                  </li>

                </ul>
              </div>

            </div>
            <div class="event-block event-item">
              <div class="event-item-timestamp">
                <time class="js-timeago" datetime="2016-12-20T10:16:06Z" title="Dec 20, 2016 10:16am" data-toggle="tooltip" data-placement="top" data-container="body">about 20 hours ago</time>
              </div>
              <a href="/u/mingyuan.wei"><img class="avatar has-tooltip hidden-xs s40" alt="mingyuan.wei's avatar" title="mingyuan.wei" src="http://secure.gravatar.com/avatar/706766aba6ccf2210430c35913569b9b?s=80&amp;d=identicon"></a>
              <div class="event-title">
                <span class="author_name"><a title="mingyuan.wei" href="/u/mingyuan.wei">mingyuan.wei</a></span>
                <span class="pushed">pushed to branch</span>
                <strong>
                  <a title="" href="/h5developer/baoxian-new/commits/faeture1222">faeture1222</a>
                </strong>
                <span class="event-scope">
at
<a title="baoxian-new" href="/h5developer/baoxian-new"><span class="namespace-name">h5developer / </span><span class="project-name">baoxian-new</span></a>
</span>

              </div>
              <div class="event-body">
                <ul class="well-list event_commits">
                  <li class="commit">
                    <div class="commit-row-title">
                      <a class="commit_short_id" alt="" title="f75b11cf" href="/h5developer/baoxian-new/commit/f75b11cf03b10a4054b4494593fc9ae62a6f8f7b">f75b11cf</a>
                      ·
                      优惠券支付面板
                    </div>
                  </li>

                </ul>
              </div>

            </div>
            <div class="event-block event-item">
              <div class="event-item-timestamp">
                <time class="js-timeago" datetime="2016-12-20T10:01:33Z" title="Dec 20, 2016 10:01am" data-toggle="tooltip" data-placement="top" data-container="body">about 20 hours ago</time>
              </div>
              <a href="/u/aru.pana"><img class="avatar has-tooltip hidden-xs s40" alt="PanAru's avatar" title="PanAru" src="http://secure.gravatar.com/avatar/741bdbab97eadfdd6af922a3e98977b7?s=80&amp;d=identicon"></a>
              <div class="event-title">
                <span class="author_name"><a title="PanAru" href="/u/aru.pana">PanAru</a></span>
                <span class="pushed">pushed to branch</span>
                <strong>
                  <a title="" href="/h5developer/shop/commits/20161220_location">20161220_location</a>
                </strong>
                <span class="event-scope">
at
<a title="shop" href="/h5developer/shop"><span class="namespace-name">h5developer / </span><span class="project-name">shop</span></a>
</span>

              </div>
              <div class="event-body">
                <ul class="well-list event_commits">
                  <li class="commit">
                    <div class="commit-row-title">
                      <a class="commit_short_id" alt="" title="50470f71" href="/h5developer/shop/commit/50470f716e075c3e01ced9b94caa48109bc655c8">50470f71</a>
                      ·
                      详情页定位问题
                    </div>
                  </li>

                </ul>
              </div>

            </div>
            <div class="event-block event-item">
              <div class="event-item-timestamp">
                <time class="js-timeago" datetime="2016-12-20T09:57:11Z" title="Dec 20, 2016 9:57am" data-toggle="tooltip" data-placement="top" data-container="body">about 20 hours ago</time>
              </div>
              <a href="/u/chentw"><img class="avatar has-tooltip hidden-xs s40" alt="陈天唯's avatar" title="陈天唯" src="http://secure.gravatar.com/avatar/d7a49e16e30a9e4af1f09bde259374a5?s=80&amp;d=identicon"></a>
              <div class="event-title">
                <span class="author_name"><a title="陈天唯" href="/u/chentw">陈天唯</a></span>
                <span class="pushed">pushed to branch</span>
                <strong>
                  <a title="" href="/wangkm/cloudhorse/commits/master">master</a>
                </strong>
                <span class="event-scope">
at
<a title="cloudhorse" href="/wangkm/cloudhorse"><span class="namespace-name">王坤明 / </span><span class="project-name">cloudhorse</span></a>
</span>

              </div>
              <div class="event-body">
                <ul class="well-list event_commits">
                  <li class="commit">
                    <div class="commit-row-title">
                      <a class="commit_short_id" alt="" title="9b081268" href="/wangkm/cloudhorse/commit/9b081268fedf157f325370da5129db5b2a2b47e6">9b081268</a>
                      ·
                      Merge branch 'co-operations' into 'master'
                    </div>
                  </li>

                  <li class="commit">
                    <div class="commit-row-title">
                      <a class="commit_short_id" alt="" title="0504af38" href="/wangkm/cloudhorse/commit/0504af38b4c1979bfeeb35df803a5f492b9844ac">0504af38</a>
                      ·
                      co-operation 10th commit
                    </div>
                  </li>

                  <li class="commits-stat">
                    <span>... and 45 more commits.</span>
                    <a href="/wangkm/cloudhorse/compare/5cfa7ad0d84eb119f3a1fa65b26336f301b92562...9b081268fedf157f325370da5129db5b2a2b47e6">Compare 5cfa7ad0...9b081268
                    </a></li>
                </ul>
              </div>

            </div>
            <div class="event-block event-item">
              <div class="event-item-timestamp">
                <time class="js-timeago" datetime="2016-12-20T09:57:07Z" title="Dec 20, 2016 9:57am" data-toggle="tooltip" data-placement="top" data-container="body">about 20 hours ago</time>
              </div>
              <a href="/u/chentw"><img class="avatar has-tooltip hidden-xs s40" alt="陈天唯's avatar" title="陈天唯" src="http://secure.gravatar.com/avatar/d7a49e16e30a9e4af1f09bde259374a5?s=80&amp;d=identicon"></a>
              <div class="event-title">
                <span class="author_name"><a title="陈天唯" href="/u/chentw">陈天唯</a></span>
                <span class="accepted"></span>
                accepted
                <strong>
                  <a class="has-tooltip" title="Co operations" href="/wangkm/cloudhorse/merge_requests/87">merge request
                    !87
                  </a></strong>
                <span class="event-scope">
at
<a title="cloudhorse" href="/wangkm/cloudhorse"><span class="namespace-name">王坤明 / </span><span class="project-name">cloudhorse</span></a>
</span>

              </div>
              <div class="event-body">
                <div class="event-note">
                  Co operations
                </div>
              </div>

            </div>
            <div class="event-block event-item">
              <div class="event-item-timestamp">
                <time class="js-timeago" datetime="2016-12-20T09:56:52Z" title="Dec 20, 2016 9:56am" data-toggle="tooltip" data-placement="top" data-container="body">about 20 hours ago</time>
              </div>
              <a href="/u/chentw"><img class="avatar has-tooltip hidden-xs s40" alt="陈天唯's avatar" title="陈天唯" src="http://secure.gravatar.com/avatar/d7a49e16e30a9e4af1f09bde259374a5?s=80&amp;d=identicon"></a>
              <div class="event-title">
                <span class="author_name"><a title="陈天唯" href="/u/chentw">陈天唯</a></span>
                <span class="opened"></span>
                opened
                <strong>
                  <a class="has-tooltip" title="Co operations" href="/wangkm/cloudhorse/merge_requests/87">merge request
                    !87
                  </a></strong>
                <span class="event-scope">
at
<a title="cloudhorse" href="/wangkm/cloudhorse"><span class="namespace-name">王坤明 / </span><span class="project-name">cloudhorse</span></a>
</span>

              </div>
              <div class="event-body">
                <div class="event-note">
                  Co operations
                </div>
              </div>

            </div>
            <div class="event-block event-item">
              <div class="event-item-timestamp">
                <time class="js-timeago" datetime="2016-12-20T09:56:08Z" title="Dec 20, 2016 9:56am" data-toggle="tooltip" data-placement="top" data-container="body">about 20 hours ago</time>
              </div>
              <a href="/u/chentw"><img class="avatar has-tooltip hidden-xs s40" alt="陈天唯's avatar" title="陈天唯" src="http://secure.gravatar.com/avatar/d7a49e16e30a9e4af1f09bde259374a5?s=80&amp;d=identicon"></a>
              <div class="event-title">
                <span class="author_name"><a title="陈天唯" href="/u/chentw">陈天唯</a></span>
                <span class="pushed">pushed new branch</span>
                <strong>
                  <a title="" href="/wangkm/cloudhorse/commits/co-operations">co-operations</a>
                </strong>
                <span class="event-scope">
at
<a title="cloudhorse" href="/wangkm/cloudhorse"><span class="namespace-name">王坤明 / </span><span class="project-name">cloudhorse</span></a>
</span>

              </div>
              <div class="event-body">
                <ul class="well-list event_commits">
                  <li class="commit">
                    <div class="commit-row-title">
                      <a class="commit_short_id" alt="" title="0504af38" href="/wangkm/cloudhorse/commit/0504af38b4c1979bfeeb35df803a5f492b9844ac">0504af38</a>
                      ·
                      co-operation 10th commit
                    </div>
                  </li>

                  <li class="commit">
                    <div class="commit-row-title">
                      <a class="commit_short_id" alt="" title="fe4e7f50" href="/wangkm/cloudhorse/commit/fe4e7f502fc94ca7cb0b2b7e280f209b5400e754">fe4e7f50</a>
                      ·
                      co-operation 9th commit
                    </div>
                  </li>

                  <li class="commits-stat">
                    <span>... and 44 more commits.</span>
                    <a href="/wangkm/cloudhorse/compare/master...0504af38b4c1979bfeeb35df803a5f492b9844ac">Compare master...0504af38
                    </a><span data-display="inline" data-user-is="16">
or
<a href="/wangkm/cloudhorse/merge_requests/new?merge_request%5Bsource_branch%5D=co-operations&amp;merge_request%5Btarget_branch%5D=master">create a merge request
</a></span>
                  </li>
                </ul>
              </div>

            </div>
            <div class="event-block event-item">
              <div class="event-item-timestamp">
                <time class="js-timeago" datetime="2016-12-20T09:54:36Z" title="Dec 20, 2016 9:54am" data-toggle="tooltip" data-placement="top" data-container="body">about 20 hours ago</time>
              </div>
              <a href="/u/chentw"><img class="avatar has-tooltip hidden-xs s40" alt="陈天唯's avatar" title="陈天唯" src="http://secure.gravatar.com/avatar/d7a49e16e30a9e4af1f09bde259374a5?s=80&amp;d=identicon"></a>
              <div class="event-title">
                <span class="author_name"><a title="陈天唯" href="/u/chentw">陈天唯</a></span>
                <span class="pushed">pushed to branch</span>
                <strong>
                  <a title="" href="/wangkm/cloudhorse/commits/dev">dev</a>
                </strong>
                <span class="event-scope">
at
<a title="cloudhorse" href="/wangkm/cloudhorse"><span class="namespace-name">王坤明 / </span><span class="project-name">cloudhorse</span></a>
</span>

              </div>
              <div class="event-body">
                <ul class="well-list event_commits">
                  <li class="commit">
                    <div class="commit-row-title">
                      <a class="commit_short_id" alt="" title="0504af38" href="/wangkm/cloudhorse/commit/0504af38b4c1979bfeeb35df803a5f492b9844ac">0504af38</a>
                      ·
                      co-operation 10th commit
                    </div>
                  </li>

                </ul>
              </div>

            </div>
            <div class="event-block event-item">
              <div class="event-item-timestamp">
                <time class="js-timeago" datetime="2016-12-20T09:15:49Z" title="Dec 20, 2016 9:15am" data-toggle="tooltip" data-placement="top" data-container="body">about 21 hours ago</time>
              </div>
              <a href="/u/mingyuan.wei"><img class="avatar has-tooltip hidden-xs s40" alt="mingyuan.wei's avatar" title="mingyuan.wei" src="http://secure.gravatar.com/avatar/706766aba6ccf2210430c35913569b9b?s=80&amp;d=identicon"></a>
              <div class="event-title">
                <span class="author_name"><a title="mingyuan.wei" href="/u/mingyuan.wei">mingyuan.wei</a></span>
                <span class="pushed">pushed new branch</span>
                <strong>
                  <a title="" href="/h5developer/baoxian-new/commits/faeture1222">faeture1222</a>
                </strong>
                <span class="event-scope">
at
<a title="baoxian-new" href="/h5developer/baoxian-new"><span class="namespace-name">h5developer / </span><span class="project-name">baoxian-new</span></a>
</span>

              </div>
              <div class="event-body">
                <ul class="well-list event_commits">
                  <li class="commit">
                    <div class="commit-row-title">
                      <a class="commit_short_id" alt="" title="4e03bd97" href="/h5developer/baoxian-new/commit/4e03bd977f17c5cc340719549d6e8bdb4bfa3c98">4e03bd97</a>
                      ·
                      优惠券列表
                    </div>
                  </li>

                  <li class="commit">
                    <div class="commit-row-title">
                      <a class="commit_short_id" alt="" title="ba5e201d" href="/h5developer/baoxian-new/commit/ba5e201da036adf78b15f776b624cbf32f5f76cf">ba5e201d</a>
                      ·
                      详情优惠券
                    </div>
                  </li>

                  <li class="commits-stat">
                    <a href="/h5developer/baoxian-new/compare/master...4e03bd977f17c5cc340719549d6e8bdb4bfa3c98">Compare master...4e03bd97
                    </a><span data-display="inline" data-user-is="77">
or
<a href="/h5developer/baoxian-new/merge_requests/new?merge_request%5Bsource_branch%5D=faeture1222&amp;merge_request%5Btarget_branch%5D=master">create a merge request
</a></span>
                  </li>
                </ul>
              </div>

            </div>
            <div class="event-block event-item">
              <div class="event-item-timestamp">
                <time class="js-timeago" datetime="2016-12-20T09:14:48Z" title="Dec 20, 2016 9:14am" data-toggle="tooltip" data-placement="top" data-container="body">about 21 hours ago</time>
              </div>
              <a href="/u/Fangxianzheng"><img class="avatar has-tooltip hidden-xs s40" alt="Fangxianzheng's avatar" title="Fangxianzheng" src="http://secure.gravatar.com/avatar/17424f9a76efd0aed0932b46d1dbf5c0?s=80&amp;d=identicon"></a>
              <div class="event-title">
                <span class="author_name"><a title="Fangxianzheng" href="/u/Fangxianzheng">Fangxianzheng</a></span>
                <span class="pushed">pushed to branch</span>
                <strong>
                  <a title="" href="/chonglu.wangcl/YMM-BMP/commits/dev">dev</a>
                </strong>
                <span class="event-scope">
at
<a title="YMM-BMP" href="/chonglu.wangcl/YMM-BMP"><span class="namespace-name">chonglu.wangcl / </span><span class="project-name">YMM-BMP</span></a>
</span>

              </div>
              <div class="event-body">
                <ul class="well-list event_commits">
                  <li class="commit">
                    <div class="commit-row-title">
                      <a class="commit_short_id" alt="" title="16bb853e" href="/chonglu.wangcl/YMM-BMP/commit/16bb853e65c8b2340d9094cfb50c329e3d73ffc7">16bb853e</a>
                      ·
                      Merge branch '2016125_fxz_dakuan-new' of code.ymmoa.com:chonglu.wan...
                    </div>
                  </li>

                  <li class="commit">
                    <div class="commit-row-title">
                      <a class="commit_short_id" alt="" title="d4744cf3" href="/chonglu.wangcl/YMM-BMP/commit/d4744cf331a5f0f00d6993139e86f1bf813ed331">d4744cf3</a>
                      ·
                      Merge branch 'dev' of code.ymmoa.com:chonglu.wangcl/YMM-BMP into dev
                    </div>
                  </li>

                  <li class="commits-stat">
                    <span>... and 4 more commits.</span>
                    <a href="/chonglu.wangcl/YMM-BMP/compare/ed4fa29ef07ff148049b5566cf602d1d6571b039...16bb853e65c8b2340d9094cfb50c329e3d73ffc7">Compare ed4fa29e...16bb853e
                    </a></li>
                </ul>
              </div>

            </div>
            <div class="event-block event-item">
              <div class="event-item-timestamp">
                <time class="js-timeago" datetime="2016-12-20T09:12:42Z" title="Dec 20, 2016 9:12am" data-toggle="tooltip" data-placement="top" data-container="body">about 21 hours ago</time>
              </div>
              <a href="/u/Fangxianzheng"><img class="avatar has-tooltip hidden-xs s40" alt="Fangxianzheng's avatar" title="Fangxianzheng" src="http://secure.gravatar.com/avatar/17424f9a76efd0aed0932b46d1dbf5c0?s=80&amp;d=identicon"></a>
              <div class="event-title">
                <span class="author_name"><a title="Fangxianzheng" href="/u/Fangxianzheng">Fangxianzheng</a></span>
                <span class="pushed">pushed to branch</span>
                <strong>
                  <a title="" href="/chonglu.wangcl/YMM-BMP/commits/2016125_fxz_dakuan-new">2016125_fxz_dakuan-new</a>
                </strong>
                <span class="event-scope">
at
<a title="YMM-BMP" href="/chonglu.wangcl/YMM-BMP"><span class="namespace-name">chonglu.wangcl / </span><span class="project-name">YMM-BMP</span></a>
</span>

              </div>
              <div class="event-body">
                <ul class="well-list event_commits">
                  <li class="commit">
                    <div class="commit-row-title">
                      <a class="commit_short_id" alt="" title="2a1e5839" href="/chonglu.wangcl/YMM-BMP/commit/2a1e5839cc085835133acf57a1507afd8a4fb1e6">2a1e5839</a>
                      ·
                      打款管理 导出优化
                    </div>
                  </li>

                </ul>
              </div>

            </div>
            <div class="event-block event-item">
              <div class="event-item-timestamp">
                <time class="js-timeago" datetime="2016-12-20T08:46:33Z" title="Dec 20, 2016 8:46am" data-toggle="tooltip" data-placement="top" data-container="body">about 21 hours ago</time>
              </div>
              <a href="/u/aru.pana"><img class="avatar has-tooltip hidden-xs s40" alt="PanAru's avatar" title="PanAru" src="http://secure.gravatar.com/avatar/741bdbab97eadfdd6af922a3e98977b7?s=80&amp;d=identicon"></a>
              <div class="event-title">
                <span class="author_name"><a title="PanAru" href="/u/aru.pana">PanAru</a></span>
                <span class="pushed">pushed to branch</span>
                <strong>
                  <a title="" href="/chonglu.wangcl/YMM-BMP/commits/dev">dev</a>
                </strong>
                <span class="event-scope">
at
<a title="YMM-BMP" href="/chonglu.wangcl/YMM-BMP"><span class="namespace-name">chonglu.wangcl / </span><span class="project-name">YMM-BMP</span></a>
</span>

              </div>
              <div class="event-body">
                <ul class="well-list event_commits">
                  <li class="commit">
                    <div class="commit-row-title">
                      <a class="commit_short_id" alt="" title="ed4fa29e" href="/chonglu.wangcl/YMM-BMP/commit/ed4fa29ef07ff148049b5566cf602d1d6571b039">ed4fa29e</a>
                      ·
                      Merge branch '20161209_blackOwner' of code.ymmoa.com:chonglu.wangcl...
                    </div>
                  </li>

                  <li class="commit">
                    <div class="commit-row-title">
                      <a class="commit_short_id" alt="" title="43a1f651" href="/chonglu.wangcl/YMM-BMP/commit/43a1f65149052c2cc42bf7b7ebb169cad663b801">43a1f651</a>
                      ·
                      useId字段更改为useIdStr
                    </div>
                  </li>

                  <li class="commits-stat">
                    <a href="/chonglu.wangcl/YMM-BMP/compare/662bc3ff7ab424952e3338d93c4b5aa3496a53b0...ed4fa29ef07ff148049b5566cf602d1d6571b039">Compare 662bc3ff...ed4fa29e
                    </a></li>
                </ul>
              </div>

            </div>
            <div class="event-block event-item">
              <div class="event-item-timestamp">
                <time class="js-timeago" datetime="2016-12-20T08:45:33Z" title="Dec 20, 2016 8:45am" data-toggle="tooltip" data-placement="top" data-container="body">about 21 hours ago</time>
              </div>
              <a href="/u/aru.pana"><img class="avatar has-tooltip hidden-xs s40" alt="PanAru's avatar" title="PanAru" src="http://secure.gravatar.com/avatar/741bdbab97eadfdd6af922a3e98977b7?s=80&amp;d=identicon"></a>
              <div class="event-title">
                <span class="author_name"><a title="PanAru" href="/u/aru.pana">PanAru</a></span>
                <span class="pushed">pushed to branch</span>
                <strong>
                  <a title="" href="/chonglu.wangcl/YMM-BMP/commits/20161209_blackOwner">20161209_blackOwner</a>
                </strong>
                <span class="event-scope">
at
<a title="YMM-BMP" href="/chonglu.wangcl/YMM-BMP"><span class="namespace-name">chonglu.wangcl / </span><span class="project-name">YMM-BMP</span></a>
</span>

              </div>
              <div class="event-body">
                <ul class="well-list event_commits">
                  <li class="commit">
                    <div class="commit-row-title">
                      <a class="commit_short_id" alt="" title="43a1f651" href="/chonglu.wangcl/YMM-BMP/commit/43a1f65149052c2cc42bf7b7ebb169cad663b801">43a1f651</a>
                      ·
                      useId字段更改为useIdStr
                    </div>
                  </li>

                </ul>
              </div>

            </div>

          </div>
          <div class="loading hide" style="display: none;"><i class="fa fa-spinner fa-spin"></i></div>

        </section>

      </div>
    </div>
  </div>
</template>

<style lang="styl" rel="stylesheet/stylus" scoped type="text/stylus">

</style>

<script type="text/ecmascript-6">
  import BasePage from 'src/extend/BasePage'
  import Server from 'src/extend/Server'
  export default{
    mixins: [ BasePage ],
    components: {},
    name: 'dashboard_todo',
    data () {
      return {
        // 一个典型列表数据格式
        tableInfo: {
          search: {},
          data: [],
          pagination: {
            size: 10,
            total: 0,
            curr: 0
          }
        }
      }
    },
    mounted: function () {
      this.loadData(1)
    },
    methods: {
      loadData (pageId) {
        this.tableInfo.pagination.curr = pageId
        var data = Object.assign({}, this.tableInfo.search)
        data.pageId = pageId - 1
        data.pageSize = this.tableInfo.pagination.size
        Server({
          url: 'projects',
          mock: true,
          method: 'post',
          data: data
        }).then((response) => {
          var data = response.data
          // 设置分页信息
          this.tableInfo.pagination.total = data.totalNum
          this.tableInfo.data = data.list
        }).catch(() => {

        })
      },
      search () {
        this.loadData(this.tableInfo.pagination.curr)
      }
    }
  }
</script>
