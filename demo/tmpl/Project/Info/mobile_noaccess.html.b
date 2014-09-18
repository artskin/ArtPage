<extend name="./Public/app_base.html" />
<block name="title"><title>{$project.title} - 永利宝（www.yonglibao.com）创新型PCP投资平台，低风险、稳回报</title></block>
<block name="keywords"><meta name="keywords" content="永利宝、P2P" /></block>
<block name="description"><meta name="description" content="永利宝：国内PCP概念首创者，致力于为睿智的投资人提供低风险、稳回报的网络投资平台。" /></block>
<block name="author"><meta name="author" content="永利宝" /></block>
<block name="custom_top_css" >
<style type="text/css">
    article .wall {

    }

    aside hr.dashed {
        margin: 10px 0;
    }

    aside h4 {
        margin-bottom: 5px;
    }

    #map {
        position: absolute;
        right: 35px;
        width: 300px;
        height: 240px;
        overflow: hidden;
    }

    .project-summary .field-validation-error {
        position: absolute;
        top: 30px;
        left: 0;
        z-index: 1010;
        max-width: 276px;
        padding: 1px;
        text-align: left;
        white-space: normal;
        background-color: #f2dede;
        border: 1px solid #b94a48;
        padding: 4px;
        text-shadow: 0 1px 0 #FFF;
        -webkit-border-radius: 6px;
        -moz-border-radius: 6px;
        border-radius: 6px;
        -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
        -webkit-background-clip: padding-box;
        -moz-background-clip: padding;
        background-clip: padding-box;
    }

    .pvinfo-Container {
        position: relative;
    }

    .pvinfo-Container .dl-horizontal {
        margin-bottom: 0;
        margin-top: 0;
    }
</style>


</block>
<block name="custom_top_js" ></block>

<block name="custom_header" >

</block>

<block name="custom_content" >


<div class="container">
<div class="row">
    <div class="wall span9">
        <div class="project-summary">
            <div class="row-fluid">
                <div class="span9">
                    <div style="min-height: 70px;">
                        <h3>
                            {$project.title} 
                            <small class="muted" style="margin-bottom: 0;white-space: nowrap;">
                            </small>
                        </h3>
                        <hr />
                            <h4 class="important"> 
                                该项目已经结束，为了保护借款人信息，只允许该项目的投资人查看。
                            </h4>
                            <br />

                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
<!--End: Row -->

</div>
<!--end: Container -->

</block>


<block name="custom_footer" >

</block>


<block name="custom_bottom_js" >
    <script type="text/javascript">
//定义中文消息
var cnmsg = {
  
    min: jQuery.format("单次最少投资 100 元")
};
jQuery.extend(jQuery.validator.messages, cnmsg);
</script>
</block>




