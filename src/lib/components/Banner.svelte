
<script>
    let {data, navigation} = $props(); 
</script>

    <header class="company-banner">
        <div class="company-logo">
            <!-- Replace with your actual logo path -->
            <img src="/company-logo.png" alt="Company Logo" height=100 width=100>
            <div>
                <div class="company-name">PT PERSADA SOKKA TAMA</div>
                <div class="company-slogan">Your trusted partner for excellence</div>
            </div>
        </div>
        {@render navigation()}
    </header>

<style>
.company-banner {
    background-color: #2a5caa;
    color: white;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.company-logo {
    display: flex;
    align-items: center;
}

.company-logo img {
    height: 40px;
    margin-right: 15px;
}

.company-name {
    font-size: 24px;
    font-weight: bold;
}

.company-slogan {
    font-style: italic;
    font-size: 14px;
}


</style>