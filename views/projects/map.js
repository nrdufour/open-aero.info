function(doc) {
  if(doc.type && doc.type == "project") {
    emit(doc.title, doc);
  }
}
