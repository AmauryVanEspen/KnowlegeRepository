 /*���� JS �����ⶼѡ��ʹ�� $ ������Ϊ�������������jQuery ��������Ϊ���͵�һ������ jQuery �У�$ ����ֻ�� window.jQuery �����һ�����ã���˼�ʹ $ ��ɾ����window.jQuery ��Ȼ�Ǳ�֤������������Եļ�ǿ��ܡ�jQuery �� API ��Ƴ�ֿ����˶���֮������ó�ͻ�����ǿ���ʹ�� jQuery.noConflict ����������ʵ�ֿ���Ȩ���ƽ���
   jQuery.noConflict ��������һ����ѡ�Ĳ�������[1]�����Ծ����ƽ� $ ���õ�ͬʱ�Ƿ��ƽ� jQuery ������
jQuery.noConflict([removeAll])
   ȱʡ����£�ִ�� noConflict �Ὣ���� $ �Ŀ���Ȩ�ƽ�����һ������ $ �Ŀ⣻�� removeAll ����Ϊ true ʱ��ִ�� noConflict ��Ὣ $ �� jQuery ������Ŀ���Ȩȫ���ƽ�����һ���������ǵĿ⡣
   ������ KISSY �� jQuery ���ã����ҹ��� $ = KISSY ���� API ������ʱ�򣬾��ܹ�ͨ������������������ͻ�����⡣
   ��ô������������ʵ�ֵ��أ��Ķ� jQuery Դ�뿪ͷ[2]����������һ�������������ģ�*/
        // Map over jQuery in case of overwrite
        _jQuery = window.jQuery,

        // Map over the $ in case of overwrite
        _$ = window.$,
   //���������ǣ�jQuery ͨ������˽�б���ӳ���� window �����µ� jQuery �� $ ���������Է�ֹ������ǿ�и��ǡ�һ�� noConflict ���������ã���ͨ�� _jQuery, _$, jQuery, $ ����֮��Ĳ��죬����������Ȩ���ƽ���ʽ������Ĵ������£�
noConflict: function( deep ) {
                if ( window.$ === jQuery ) {
                        window.$ = _$;
                }

                if ( deep && window.jQuery === jQuery ) {
                        window.jQuery = _jQuery;
                }

                return jQuery;
        }
   /*������������˵�Ĳ����趨���⣬��� deep û�����ã�_$ ���� window.$����ʱ jQuery ���� $ ʧЧ���� jQuery ������������������������������¶����� $ ���������Ŀ���Ȩ����ȫ���ӳ�ȥ�ˡ���֮��� deep ����Ϊ true �Ļ���_jQuery ���� window.jQuery����ʱ $ �� jQuery ����ʧЧ��
   ���ֲ����ĺô��ǣ������ǿ�ܻ��û��� jQuery ��汾�������ָ߶ȳ�ͻ��ִ�л��������� noConflict �����ṩ���ƽ����ƣ��Լ�������δ�����ǵ� jQuery ������ȫ�ܹ�ͨ������ӳ��ķ�ʽ�����ͻ��
   ���޷��������ʵ�ǿ��ܵ��µĲ��ʧЧ�����⣬��Ȼͨ�����޸������Ĳ������ɻָ� $ ������*/
var query = jQuery.noConflict(true);
(function ($) {

     // �����������ʽ�Ĵ��룬Ҳ���Խ�������Ϊ jQuery

})(query);
