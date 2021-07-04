/**
 * 获取 URL 参数
 * @param {*} key 
 * @returns 
 */
export function getUrlParam(key) {
  const url = window.location.href;
  const paramString = url.substring(url.indexOf('?') + 1, url.length).split('&');
  const paramObj = {};

  paramString.forEach((param) => {
    const position = param.indexOf('=');
    const paramKey = param.substring(0, position).toLowerCase();
    paramObj[paramKey] = param.substring(position + 1, param.length);
  });

  return paramObj[key.toLowerCase()] || '';
}


/**
 * 显示 提示信息
 * @param {*} param 
 */
export const showTips = (param) => {
  this.$message({
    showClose: true,
    message: param.text,
    type: param.type,
    center: true,
  });
};
