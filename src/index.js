function ConsoleLogWriter () {
  this.write = (content) => {
    console.info(content);
  };
}

function StringLogParser () {
  this.parse = (from) => {
    return from;
  };
}

/***
 * GC LOG
 * use({ writer }) to log(any) powered by use({ parser })
 ***/
export function GcLog () {
  this.init = () => {
    this.writer = new ConsoleLogWriter();
    this.parser = new StringLogParser();
  };

  this.use = ({ writer: _writer, parser: _parser }) => {
    if (_writer) {
      if (['write'].some((func) => !_writer[func])) {
        console.warn('Log writer is invalid, fallback to ConsoleLogWriter.');
      } else {
        this.writer = _writer;
      }
    }

    if (_parser) {
      if (['parse'].some((func) => !_parser[func])) {
        console.warn('Log parser is invalid, fallback to StringLogParser.');
      } else {
        this.parser = _parser;
      }
    }
  };

  this.log = (any) => {
    let content = this.parser.parse(any);
    if (typeof content !== 'string') content = '';
    logContent.call(this, content);
  };

  function logContent (content) {
    const encodedContent = base64.call(this, content);
    const gcLink = `https://getcurl.app/#body=${encodedContent}`;
    this.writer.write(gcLink);
  };

  function base64 (content) {
    return btoa(
      encodeURIComponent(content).replace(/%([0-9A-F]{2})/g, function toSolidBytes (match, p1) {
        return String.fromCharCode('0x' + p1);
      }),
    );
  }

  this.init();
}

export default GcLog;
