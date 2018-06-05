(function() {
    var main = {
        htmlElem: null,
        headerElem: null,
        homepageHeroElem: null,
        selectorsForHeader: [
            "body.template-product .product-detail",
            ".hero-banner-contents",
            ".wishlistpage"
        ],

        init: function() {
            var self = this;

            self.welcome();
            self.profile();
            self.family();
            self.video();
        },

        welcome: function() {},
        profile: function() {
            var existing = sessionStorage.getItem("USER");
            console.log("existing", existing);
            if (existing) {
                var user = JSON.parse(existing);
                // var avatar = $(".avatar img.is-selected").attr("src");
                $("#profile input[name='name']").val(user.name);
                $("#profile input[name='age']").val(user.age);
                $("#profile input[name='school']").val(user.school);
            }

            $("#profile button.profile-submit").click(function() {
                console.log("jhere");
                var avatar = $(".avatar img.is-selected").attr("src");
                var name = $("#profile input[name='name']").val();
                var age = $("#profile input[name='age']").val();
                var school = $("#profile input[name='school']").val();

                console.log("avatar", avatar);
                console.log("name", name);

                var user = JSON.stringify({
                    avatar,
                    name,
                    age,
                    school
                });
                sessionStorage.setItem("USER", user);
                window.location = "_family.html";
            });
        },
        family: function() {
            $("#family .add-family").click(function() {
                var toAdd = $("input[name=family-member]").val();
                $("ul.family-members").prepend(
                    "<li class='family-member-item'>" + toAdd + "</li>"
                );
                $("input[name=family-member]").val("");
            });
        },
        video: function() {
            $.extend(true, $.magnificPopup.defaults, {
                iframe: {
                    patterns: {
                        youtube: {
                            index: "youtube.com/",
                            id: "v=",
                            src: "http://www.youtube.com/embed/%id%?autoplay=1"
                        }
                    }
                }
            });
            $(".popup-video").magnificPopup({
                disableOn: 700,
                type: "iframe",
                mainClass: "mfp-fade",
                removalDelay: 160,
                preloader: false,

                fixedContentPos: true
            });
        },
        end: function() {}
    };

    document.addEventListener("DOMContentLoaded", function(event) {
        main.init();
    });
})();
