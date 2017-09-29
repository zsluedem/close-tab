// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Global variables only exist for the life of the page, so they get reset
// each time the page is unloaded.

chrome.tabs.onCreated.addListener(function(){
  chrome.tabs.query({status:"complete"}, function(tabs){
    if (tabs.length> 10){
      var tab = tabs[1];
      chrome.tabs.remove(tab.id);
    }
  });
});
