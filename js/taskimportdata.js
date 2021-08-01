table_data_description = [
    "Youtube Video to Audio Converter </br> Using pytube module the program asks to the user to insert the URL of a youtube video. </br> Then it downloads the audio and it saves it as mp3 file.",
    "Task: You are given the file airports.csv containing information about 7968 airports in the world.</br>Read the CSV file and extracts from it the names of the airports (2nd column in the CSV) in Asia.</br>You can distinguish them since they contain in the 12th column a String starting with \"Asia/\" (e.g., Asia/Shanghai).</br>The extracted names must be stored alphabetically and printed. The CSV file has no header.</br>"
]

table_data_masked_code = [
    "from pytube import YouTube|||import pytube|||import os|||              |||def download_video():|||video_url = input('Enter YouTube video URL: ')|||              |||if os.name == 'nt':|||path = os.getcwd() + '\\\\'|||else:|||path = os.getcwd() + '/'||||||name = pytube.extract.video_id(video_url)|||remoteStreams = YouTube(video_url).streams|||targetStream = remoteStreams.filter(only_audio=True).first()|||&lt;TO COMPLETE&gt;|||location = path + name + '.mp4'|||renametomp3 = path + name + '.mp3'||||||if os.name == 'nt':|||os.system('ren {0} {1}'. format(location, renametomp3))|||else:|||os.system('mv {0} {1}'. format(location, renametomp3))||||||if __name__ == '__main__':|||download_video()",
"import csv||||||csv_path = '/Users/gbavota/publications/inprogress/code-completion-quality/tasks/airports.csv'|||||||||def get_airports():|||    airports_in_asia = []||||||    # Get the airports in Asia|||    with open(csv_path) as airports:|||        reader = csv.reader(airports, delimiter=',')||||||        # Iterate through the line sof the CSV|||        for line in reader:|||            if line[11].startswith(\"Asia/\"):|||                &lt;TO COMPLETE&gt;||||||    # Sort the array|||    airports_in_asia.sort()||||||    # Print the array|||    for airport in airports_in_asia:|||        print(airport)"
];

table_data_retrieval=[
    "def main_work_subdirs(gl):|||    for root, dirs, files in os.walk(gl['pwd']):|||        dirs.sort()|||        if root == gl['pwd']:|||            for d2i in dirs:|||                print(d2i)",
    "import  pandas as pd||||||df = pd.DataFrame([sub.split(\",\") for sub in l])|||print(df)||||||import  pandas as pd||||||df = pd.read_csv(\"in.csv\",skiprows=3,header=None)|||print(df)||||||df = pd.read_csv(\"in.csv\",header=None,comment=\"#\")  ||||||import pandas as pd|||from itertools import dropwhile|||import csv|||with open(\"in.csv\") as f:|||    f = dropwhile(lambda x: x.startswith(\"#!!\"), f)|||    r = csv.reader(f)|||    df = pd.DataFrame().from_records(r)"
];

table_data_validation=[
    "targetStream.download(filename=name)|||print(targetStream)|||targetStream.check_if_exists(video_url)",
    "airports_in_asia.append(line[1])|||airports_in_asia.add(line[0])|||airports_in_asia.append(line.substring(0,1))"
]

table_data_IDE=[
    "None",
    "airports_in_asia"
];

table_data_T5=[
    "path = targetStream . Path",
    "airports_in_asia . append ( line [ 11 ] [  ⁇  : ] )"
];

table_data_natural2code = [
    "urllib.request.URLopener()",
    "array[1].astype(float)"
]

var tasks = {};

tasks["description"] = table_data_description

tasks["masked_code"] = table_data_masked_code

tasks["retrieval"]=table_data_retrieval
tasks["IDE"]=table_data_IDE
tasks["T5"]=table_data_T5
tasks["N2C"]=table_data_natural2code
tasks["validation"]=table_data_validation