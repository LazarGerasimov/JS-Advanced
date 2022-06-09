function requestValidator(obj) {
    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let uriREGEX = /^[\w.]+$/;

    if(!(obj.method && validMethods.includes(obj.method))) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if(!(obj.uri && (obj.uri == '*' || uriREGEX.test(obj.uri)))) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if(!(obj.version && validVersions.includes(obj.version))) {
        throw new Error('Invalid request header: Invalid Version');
    }

    let messageRegex = /^[^<>\\&\'\"]+$/;

    if(!(obj.hasOwnProperty('message') && (obj.message == '' || messageRegex.test(obj.message)))) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return obj;
}