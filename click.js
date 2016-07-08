var BaseEvent = require('./base-event.js');

module.exports = BaseEvent(clickLambda);

function clickLambda(ev, broadcast) {
    var opts = this.opts;

    if (!opts.ctrl && ev.ctrlKey) {
        return;
    }

    if (!opts.meta && ev.metaKey) {
        return;
    }

    if (!opts.rightClick && ev.which === 2) {
        return;
    }

    if (this.opts.preventDefault) {
        if (ev.preventDefault) {
          ev.preventDefault();
        } else {
    
          //for browsers that don't support preventDefault().
          ev.cancelBubble = true;
          ev.returnValue = false;
        }
    }

    broadcast(this.data);
}
