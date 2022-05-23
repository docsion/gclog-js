function ConsoleLogWriter () {
  function write (content) {
    console.info(content);
  }

  return {
    write,
  };
}

function StringLogParser () {
  function parse (from) {
    return from;
  }

  return {
    parse,
  };
}

/***
 * GC LOG
 * use({ writer }) to log(any) powered by use({ parser })
 ***/
export function GcLog () {
  let writer, parser;

  function init () {
    writer = ConsoleLogWriter();
    parser = StringLogParser();
  }

  function use ({ writer: _writer, parser: _parser }) {
    if (_writer) {
      if (['write'].some((func) => !_writer[func])) {
        console.warn('Log writer is invalid, fallback to ConsoleLogWriter.');
      } else {
        writer = _writer;
      }
    }

    if (_parser) {
      if (['parse'].some((func) => !_parser[func])) {
        console.warn('Log parser is invalid, fallback to StringLogParser.');
      } else {
        parser = _parser;
      }
    }
  }

  function log (any) {
    let content = parser.parse(any);
    if (typeof content !== 'string') content = '';
    logContent(content);
  }

  function logContent (content) {
    const base64Content = base64(content);
    const encodedContent = encodeURIComponent(base64Content);
    const gcLink = `https://getcurl.app/#body=${encodedContent}`;
    writer.write(gcLink);
  }

  function base64 (content) {
    return btoa(
      encodeURIComponent(content).replace(/%([0-9A-F]{2})/g, function toSolidBytes (match, p1) {
        return String.fromCharCode('0x' + p1);
      }),
    );
  }

  init();

  return {
    use,
    log,
  };
}

export default GcLog;
