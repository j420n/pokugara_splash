var request;
$(document).ready(function () {
    $('btnRegister').click( function () {
        $('#register-form').submit();
    });
    RegisterInterest = function () {
        $("#btnRegister").button('loading');
        // abort any pending request
        if (request) {
            request.abort();
        }

        var $form = $('#register-form');
        var $inputs = $form.find("input, select, button, textarea");
        var serializedData = $form.serialize();

        // disable the inputs for the duration of the ajax request
        // (note: we disable elements AFTER the form data has been serialized. Disabled form elements will not be serialized)
        $inputs.prop("disabled", true);

        request = $.ajax({
            url: "https://script.google.com/macros/s/AKfycbxBodnzSduWj3ah55EFIziHgJitPvOmBNfbfb45fpe_Pjcmf_5f/exec",
            type: "post",
            data: serializedData
        });


        // callback handler that will be called on success
        request.done(function (response, textStatus, jqXHR){
            $('#register-form').fadeOut( 1600, function () {
                $("#thanks").removeClass('hidden');
            });
        });

        // callback handler that will be called on failure
        request.fail(function (jqXHR, textStatus, errorThrown){
            // log the error to the console
            console.error(
                "The following error occurred: " + textStatus, errorThrown
            );
        });

        // callback handler that will be called regardless
        // if the request failed or succeeded
        request.always(function () {
            // re-enable the inputs
            $inputs.prop("disabled", false);
        });

        // prevent default posting of form
        event.preventDefault();
    }
    $('#register-form').validate({ // initialize the plugin
        submitHandler: RegisterInterest,
        rules: {
            name: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            tel: {
                required: true,
                digits: true
            }
        }
    });

});
