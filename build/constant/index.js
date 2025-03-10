"use strict";
module.exports = {
    scrapeType: ['user', 'hashtag', 'location', 'comments', 'likers', 'followers', 'following', 'user_meta', 'post_meta', 'history', 'from-file'],
    authScrapeType: ['following', 'followers'],
    startFromWebPage: ['location', 'comment', 'user', 'stories'],
    startFromWebApi: ['following', 'followers'],
    downloadable: ['user', 'hashtag', 'location'],
    notDownloadable: ['comments', 'likers', 'followers', 'following', 'user_meta', 'post_meta'],
    mediaType: ['video', 'image', 'all'],
    fileType: ['json', 'csv', 'all', 'na'],
    history: ['user', 'hashtag', 'location', 'comments', 'likers'],
    csvFields: [
        'id',
        'ownerId',
        'ownerUsername',
        'shortcode',
        'isVideo',
        'takenAtTimestamp',
        'takenAtGMT',
        'commentsDisabled',
        'thumbnailSrc',
        'url',
        'likes',
        'comments',
        'views',
    ],
    csvCommentFields: [
        'id',
        'text',
        'created_at',
        'did_report_as_spam',
        'owner_id',
        'owner_username',
        'owner_is_verified',
        'viewer_has_liked',
        'likes',
    ],
    csvLikersFields: [
        'user_id',
        'username',
        'full_name',
        'profile_pic_url',
        'is_private',
        'is_verified',
        'followed_by_viewer',
        'requested_by_viewer',
    ],
    hash: {
        user: '003056d32c2554def87228bc3fd9668a',
        hashtag: '174a5243287c5f3a7de741089750ab3b',
        location: '1b84447a4d8b6d6d0426fefb34514485',
        post: '870ea3e846839a3b6a8cd9cd7e42290c',
        comments: 'bc3296d1ce80a24b1b6e40b1e72903f5',
        likers: 'd5d763b1e2acf209d62d22d184488e57',
        followers: 'c76146de99bb02f6415203be841dd25a',
        following: 'd04b0a864b4b54837c0d870b0e77e076',
    },
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36',
};
